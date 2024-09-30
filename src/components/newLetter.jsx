import React from "react";
import { landing_two } from "../image/rent";

export default function NewLetter() {
  return (
    <>
<h2 className="title">subscribe</h2>

      <div
        style={{ backgroundImage: `url(${landing_two})` }}
        className="newletters"
      >
        <div className="container">
          <div className="textSide">
            <h2>sign up for newletter</h2>
          </div>
          <div className="emailSide">
            <input type="email" className="noinput" placeholder="type your email" />
            <button>sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}
