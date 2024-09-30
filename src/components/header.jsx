import { useEffect, useState, useRef, useContext } from "react";
import { icon } from "../image/rent";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IsLoggined } from "../context";

// TODO :  when you finish your app you must refactor this code as well , is spagitt

// you must continue your course before continuing , you might forget the router

export default function Header({ dark }) {
  // --------------------------------------- declaration of hooks ---------------------------------------
  const [isSocial, setValuet] = useState(window.innerWidth < 515);
  const [activess, setActive] = useState(false);
  const [isTickets, setIsTickets] = useState(false);
  const { islogin: isLoggin, setisloggin: setIsLoggin } =
    useContext(IsLoggined);
  const [darkMode, setFunctions] = dark;
  const local = useLocation();
  const ref = useRef(null);
  // --------------------------------------- function ---------------------------------------
  function setMarginTopOfSiblingOfHeader() {
    ref.current.nextElementSibling.style.marginTop =
      ref.current.clientHeight + "px";
  }
  // --------------------------------------- hooks ---------------------------------------

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
  function toogle(event) {
    let { dataset } = event.target;
    let names = dataset.name;
    setIs((pre) => ({
      ...pre,
      [names]: !pre[names],
    }));
  }






  useEffect(() => {
    // change path
    




    if (local.pathname.split("/")[1] === "rent") {
      setIsTickets(true);
    } else {
      setIsTickets(false);
    }

    setIsLoggin(JSON.parse(localStorage.getItem("isLoggedIn")));
    // make the element after header has margins
    window.addEventListener("resize", () => {
      setValuet(window.innerWidth < 515);
      setMarginTopOfSiblingOfHeader();
    });
    setMarginTopOfSiblingOfHeader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [local.pathname]);
  let [is, setIs] = useState({
    bars: false,
    setting: false,
    search: false,
  });
  useEffect(() => {
    if (is.search) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
    }else{
      document.body.style.overflow = "auto";

    }
  } , [is.search])

  useEffect(() => {
    document.body.className = darkMode ? "darkMode" : "";
  }, [darkMode]);
  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (activess) {
        if (!(e.target.classList.contains("otherLink") || e.target.classList.contains("rentLink"))) {
          setActive(false);
        }
      }
      if (is.search) {
        if (!(e.target.classList.contains("overlay") || e.target.classList.contains("rentLink"))) {
          setActive(false);
        }
      }
    });
  },[activess , is.search])

  // ----------------------------------------------------------------
  // -----------------------------------rest-----------------------------
  let classdoNeed = "dn";
  if (activess) {
    classdoNeed = "df";
  } else {
    classdoNeed = "dn";
  }

  let tr;
  let sr;
  if (!isSocial) {
    tr = "none";
  } else {
    tr = !is.bars ? "-200vw" : "00vh";
  }
  sr = !is.setting ? "-200vw" : "00vh";

  // ---------------------------------------------------------------- component ----------------------------------------------------------------
  // ---------------------------------------------------------------- component ----------------------------------------------------------------
  // ---------------------------------------------------------------- component ----------------------------------------------------------------
  // ---------------------------------------------------------------- component ----------------------------------------------------------------
  // ---------------------------------------------------------------- component ----------------------------------------------------------------
  // the componet of settings bars
  const Xpress = function () {
    if (isLoggin) {
      return (
        <button
          onClick={() => {
            localStorage.setItem("isLoggedIn", false);
            setIsLoggin(false);
          }}
        >
          <Link to="../">log out</Link>
        </button>
      );
    } else {
      return (
        <button>
          <Link to="/login">log in</Link>
        </button>
      );
    }
  };

  const SettingsBar = function () {
    return (
      <ul style={{ right: sr }} className="setting">
        <i
          onClick={(i) => {
            toogle(i);
          }}
          data-name="setting"
          className="fa-solid fa-2x close  fa-xmark"
        ></i>
        <li className="darkModeButton">
          <p style={{cursor:"pointer" , textShadow:"5px 5px 10px gray"}} onClick={() => {
                setFunctions((pre) => !pre);
              }}>{darkMode?"light" : "dark"}</p>
          
        </li>
        <li className="login">
          <Xpress />
        </li>
      </ul>
    );
  };

  // component of the media
  const Social = () => {
    return (
      <div className="social-media">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkden"></i>
      </div>
    );
  };

  return (
    <>
        {is.search && <div style={{
          zIndex:"1000",
          height:"calc(100dvh - 96px)",
          display:"flex",
          justifyContent:"center",
          flexDirection:"column",
          alignItems:"center",
          opacity:".9",
       
        }} className="overlay">
          <i style={{color:"white",position:'absolute',top:"10px" , right:"10px"}}  onClick={()=> setIs((pre)=>({
                ...pre,
                search: !pre.search
              }))} className="fa-solid fa-3x close fa-xmark"></i>
          <div style={{width:"90%"}}>
            <label htmlFor="search">search</label>
            <input style={{width:"80%" , display:"block"}} type="text" id="search"/>
            <button>search</button>
          </div>
          </div>}
      <header ref={ref}>
        <div className="container">
          <div className="icon-logo">
            <a href="./">
              <img src={icon} alt="" />
              AirSave
            </a>
          </div>
          <nav>
            <ul style={{ right: tr }} className="links">
              {isSocial && (
                <i
                  onClick={(i) => {
                    toogle(i);
                  }}
                  data-name="bars"
                  className="fa-solid fa-2x close fa-xmark"
                ></i>
              )}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : null
                  }
                  to="/"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : null
                  }
                  to="ticket"
                >
                  ticket
                </NavLink>
              </li>

              <li className="rentLink">
                {/* TODO : you must remove a link from rent NAVlink for better UX */}
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive || isTickets ? "rentLink active-link" : "rentLink"
                  }
                  style={{ display: "flex" }}
                  to="rent"
                  onClick={() => setActive((pre) => !pre)}
                >
                  rent
                  <div className="up-arrow"></div>
                </NavLink>

                <div className={classdoNeed}>
                  <div className="bottom-arrow"></div>
                  <ul
                    onClick={() => setActive((pre) => !pre)}
                    className="otherLink"
                  >
                    <li>
                      <NavLink
                        end
                        className={({ isActive }) =>
                          isActive ? "active-link" : null
                        }
                        to="rent"
                      >
                        Private Jet
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active-link" : null
                        }
                        to="rent/company"
                      >
                        company
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : null
                  }
                  to="contact"
                >
                  contact
                </NavLink>
              </li>
              {isSocial && <Social />}
            </ul>
            <SettingsBar />
            <div className="icon">
              <i
                onClick={(i) => {
                  toogle(i);
                }}
                data-name={!isSocial ? "setting" : "bars"}
                className={`fa-solid ` + (isSocial ? "fa-bars" : "fa-gear")}
              ></i>
              <i onClick={()=> setIs((pre)=>({
                ...pre,
                search: !pre.search
              }))} className="fa-solid fa-magnifying-glass"></i>
            </div>
          </nav>
        </div>
        {isSocial && (
          <i
            onClick={(i) => {
              toogle(i);
            }}
            data-name={"setting"}
            className="fa-solid  bottomon fa-gear"
          ></i>
        )}
      </header>
    </>
  );
}
