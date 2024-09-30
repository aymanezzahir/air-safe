import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  landing_one,
  feature_one,
  feature_two,
  feature_three,
  blog_five,
  blog_two,
} from "../image/rent";
import AirPlane from "../pages/rentPage/rentCard";
import { GetRent } from "../api";



// loader API functions
export function myLoader({request , params}) {
 return GetRent();
}

export default function App() {
  
  let data = useLoaderData();
  let plane = data.airplan;
  plane = plane.filter(item => item.type[1]==='popular')
  let [theCurrentCard, setTheCurrentCard] = React.useState(plane[0]);

  let theNameData = plane.map((item) => {
    let class_name = "";
    if (item.id === theCurrentCard.id) {
      class_name = "actived";
    }

    return (
      <h3
        id={item.id}
        style={{ "--main-color": item.myStyle.bgColor }}
        className={class_name}
        key={item.id}
        onClick={(itemClick) => ChangeTheCard(itemClick)}
      >
        {item.name}
      </h3>
    );
  });
  function ChangeTheCard(i) {
    let ElementId = i.target.id;
    for (let item of plane) {
    
      if (item.id === +ElementId) {
        setTheCurrentCard(item);
      }
    }
  }
  return (
    <>
      <div
        style={{ backgroundImage: `url(${landing_one})` }}
        className="aboveHeader landing landingHome"
      >
        <div className="overlay"></div>
        <div className="container">
          <div>
            <h2>faster and safely way to fly</h2>
            <img src="../image/landing/landingHome.jpg" alt="" />
            <h1>fly freely</h1>
            <p>
              the safest way to transport is by plane , but with airSave ,you
              are safer than ever
            </p>
            <div className="button-link">
              <button>
                <Link to="/ticket">Tickets</Link>
              </button>
              <button>
                <Link to="/rent">rent private plane</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="box">
            <img src={feature_three} alt="features" />
            <div>investitement</div>
          </div>
          <div className="box">
            <img src={feature_two} alt="features" />
            <div>safely</div>
          </div>
          <div className="box">
            <img src={feature_one} alt="features" />
            <div>faster</div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url('${blog_five}')` }} className="promo">
        <div className="container">
          <h4>repair service</h4>
          <h2>
            up to <span>30% for tickets</span>
          </h2>
          <button className="general">
            <Link to="ticket">explore</Link>
          </button>
        </div>
      </div>
      <section className="whoweare">
        <div className="container">
          <h2 className="title">who we are ?</h2>
          <div className="content">
            <div className="image">
              <img src={blog_two} alt="blog" />
            </div>
            <div className="textside">
              <h2>
                AirSave: Where Safety Soars, Speed Reigns, and Comfort Prevails
              </h2>
              <hr />
              <h3>
                Founded in 2022, airSave has quickly emerged as the leader in
                the aviation industry, redefining what it means to fly. Our
                commitment to safety, speed, and comfort has set us apart from
                the rest.Discover the future of air travel with airSave. We
                invite you to experience safety, speed, and comfort like never
                before. Book your ticket with us today and embark on a journey
                that will redefine the way you see the world.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="padding popular">
        <div className="container">
          <h2 className="title">popular private airplane</h2>
          <div className="content">
            <aside>
              <h2 className="title_airplane">popular ones</h2>
              <div className="content_airplane">{theNameData}</div>
            </aside>
            <main>
              {theCurrentCard ? <AirPlane
                {...theCurrentCard}
                styles={ { "--main-color": theCurrentCard.color } }
                h={1}
              />:<div className="loadings"></div>}
            </main>
          </div>
          <button><Link to='rent'>Discover further</Link></button>
        </div>
      </section>
    </>
  );
}
