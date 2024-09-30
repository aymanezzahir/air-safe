import React from "react";
import { blog_three, contact as image } from "../image/rent";
const contact = () => {
  return (
    <>
      <div>
        <h2 className="title">Comment</h2>
        <div id="contact" className="contact">
          <div
            style={{
              backgroundImage: `url('${blog_three}')`,
              position: "relative",
            }}
            className="myImageForComment"
          >
            <div className="overlay"></div>
            <div className="content">
              <h2>Message</h2>
              <p>
                Do you have any questions or need assistance with our products
                or services? We're here to help! Please don't hesitate to get in
                touch with us.
              </p>
              <div>
                <img src={image} alt="pictures" />
              </div>
            </div>
          </div>
          <form className="myForm">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="type your name here!" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Type Your Email" />
            <label htmlFor="text">Your Message</label>
            <textarea
              placeholder="Type your comment here!"
              id="text"
              cols="30"
              rows="10"
            ></textarea>
            <button>submit</button>
          </form>
        </div>
      </div>
      <div className="contact-details">
        <h2 className="title">adresses</h2>
        <div className="container">
          <div className="content">
            <div className="box">
              <i className="fa-solid fa-4x fa-headset"></i>
              <h2>by phone</h2>
              <h3>
                Morocco Toll-Free:
                <br /> (+212)6 56 78 25 45
              </h3>

              <h3>
                international:
                <br />
                1-564-879-1245
              </h3>
              <p></p>
            </div>

            <div className="box">
              <i className="fa-solid fa-4x fa-envelope-open-text"></i>
              <h2>start new case</h2>
              <p>
                just send us your questions or concerns by starting a new case
                and we will give you the help you need.
              </p>
              <span
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                start here
              </span>
            </div>

            <div className="box">
              <i className="fa-regular fa-4x fa-comments"></i>
              <h2>live chat</h2>
              <p>chat with a member of our house team</p>
              <span
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                start here
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
