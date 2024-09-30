import React from "react";
import { landing_three, pay1, pay2, pay3, pay4, pay5, pay6 } from "../image/rent";
import { fetchingTickets } from "../api";
import {
  useLoaderData,
  useOutletContext,
  defer,
  Await,

} from "react-router";
export async function loading() {
  return defer({ tickets: fetchingTickets() });
}

export default function Tickets() {
  let myData = useLoaderData();
  let isDark = useOutletContext();
  let [button , setButton] = React.useState(false)
  // hooks
  React.useEffect(()=>{
    const box = document.querySelectorAll(".box__");
    
    if(button){
      for (let i = 0; i < 10; i++) {
        box[i].style.display="none"   
      }
    }else{
      for (let i = 0; i < 10; i++) {
        box[i].style.display="flex"   
      }
    }
  } , [button])
  // landing
  React.useEffect(() => {
    let mybuttonNav = document.querySelectorAll(".TicketsLanding nav .box");
    let sections__ = document.querySelectorAll(".TicketsLanding main  > div");
    // intialization of tickets
    document
      .querySelectorAll(".TicketsLanding nav .box")[0]
      .classList.add("active");
    document.querySelectorAll(".TicketsLanding main  > div")[
      document.querySelectorAll(".TicketsLanding main  > div").length - 1
    ].style.display = "none";

    mybuttonNav.forEach(function (e) {
      document
        .querySelector(".TicketsLanding main  > div.active")
        ?.classList.remove("active");
      e.addEventListener("click", function (e) {
        let dataname = e.currentTarget.dataset.name;
        e.currentTarget.classList.add("active");
        sections__.forEach(function (section) {
          section.style.display = "none";
          if (section.dataset.name === dataname) {
            section.style.display = "block";
          }
        });
      });
    });
  }, []);
  // you Data is Ready
  function layoutFunc(data) {
    return (
     <>
      {data.map((bo)=> <Box 
      {...bo}
      key={bo.name}
      />)}</>
    );
  }

  const Box = ({name , url , description , takeOffAirplane , price , arrivalDate}) => (
    <div id="box" className="box__" key={name}>
      <img src={url} alt="tickets" />
     <div>
     <h1>Meknés To {name}</h1>
      <p>
        {description}
      </p>
      <h3 style={{marginTop:'10px'}}>take off day: {arrivalDate}</h3>
      <h5>{takeOffAirplane}</h5>
      <h4 style={{margin:'10px 0' , fontSize:'1.5rem' , color:'var(--mainColor)'}}>from</h4>
      <h1
      style={{textAlign:'center'}}
      
      >{price}$</h1>
     </div>
     <button>bring it</button>
    </div>
  );

  return (
    <>
      <section
        style={{ backgroundImage: `url('${landing_three}')` }}
        className="padding TicketsLanding"
      >
        {isDark && <div className="overlay"></div>}
        <div className="container">
          <div className="content">
            <nav>
              <div className="box" data-name="tickets">
                Tikects
              </div>
              <div className="box" data-name="trip">
                Trip
              </div>
            </nav>

            <main>
              <div className="ticketsMain" data-name="tickets">
                <h2>type your destination for more details</h2>
                <div className="form">
                  <input type="text" placeholder="From" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z" />
                  </svg>
                  <input type="text" placeholder="To" />
                </div>
                <button>bring it</button>
              </div>
              <div className="tripMain" data-name="trip">
                <h2>enter the code of trip if have it.</h2>

                <input
                  type="text"
                  placeholder="please entre the code of your trip"
                />

                <button>Search</button>
              </div>
            </main>
          </div>
        </div>
      </section>
      <section className="boxBox">
        <div className="container">
         
          <div className="content">
          <React.Suspense fallback={<div className="loadings"></div>}>
            <Await resolve={myData.tickets}>{layoutFunc}</Await>
          </React.Suspense>
          </div>
        </div>
        <button style={{width:'max-content' , margin:'0 auto'}} onClick={()=> {setButton(pre => !pre)}}>{button?'more':'less'}</button>
      </section>
      <section className="methode">
        <div className="container">
          <h2 className="title">method payment</h2>
          <div className="grid">
            <img src={pay1} alt="method" />
            <img src={pay2} alt="method" />
            <img src={pay3} alt="method" />
            <img src={pay4} alt="method" />
            <img src={pay5} alt="method" />
            <img src={pay6} alt="method" />
          </div>
        </div>
      </section>
    </>
  );
}
