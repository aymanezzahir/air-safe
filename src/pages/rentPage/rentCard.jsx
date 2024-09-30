import React from "react";
import { useNavigate } from "react-router-dom";
export default function Componet(props) {
  let navigate = useNavigate();
 if(props.h){
 
  let feature = props.type.map((e,i) => (
    <h3
      key={i}
      style={{
        backgroundImage: `url(${props.myStyle.bgImg})`,
        backgroundColor: props.myStyle.bgColor,
      }}
      className={`features--airplane ${e === "popular" && "popular"}`}
    >
      {e}
    </h3>
  ));
  return (
    <div
      onClick={() => {
        navigate("/rent");
      }}
      className="card_airpalne"
    >
      <img key={props.id} src={props.imgSrc} alt="airPlane" />
      <div style={props.styles} className="features_airplane">
        {feature}
      </div>
      <h2>{props.name}</h2>
      <div className="status">
        <div className="statics">
          <span>
            {props.status.speed}Km/h
            <i className="fa-solid fa-gauge-simple-high"></i>
          </span>
          <span>
            {props.status.capacity}
            <i className="fa-solid fa-users"></i>
          </span>
          <span>
            {props.status.rate}•(6)
            <i style={{ color: "gold" }} className="fa-solid fa-star"></i>
          </span>
        </div>
        <p className="desc">{props.status.desc}</p>
      </div>
      <h3 className="price">${props.price}/hour</h3>
    </div>
  );
 }else{

  return (
    <div
      onClick={() => {
        navigate("/rent");
      }}
      className="card_airpalne"
    >
      <img key={props.id} src={props.imgSrc} alt="airPlane" />
      <h2>{props.name}</h2>
      <div className="status">
        <div className="statics">
          <span>
            {props.status.speed}Km/h
            <i className="fa-solid fa-gauge-simple-high"></i>
          </span>
          <span>
            {props.status.capacity}
            <i className="fa-solid fa-users"></i>
          </span>
          <span>
            {props.status.rate}•(6)
            <i style={{ color: "gold" }} className="fa-solid fa-star"></i>
          </span>
        </div>
        <p className="desc">{props.status.desc}</p>
      </div>
      <h3 className="price">${props.price}/hour</h3>
    </div>
  );
 }
}
