import React from "react";
import {IsLoggined} from "../context";
import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
let emailFirst = "test@example.com";
let passwordFirst = "aot4ever";

async function LoginIn(email, password) {
  console.log({ email, password });
  if (email === emailFirst && password === passwordFirst) {
    return { email: email, password: password };
  }
  // eslint-disable-next-line no-throw-literal
  throw { message: "the email or password are incorrect" };
}

export async function actiont({ request }) {
  const data = await request.formData();
  const emails = data.get("email");
  const motdepasse = data.get("password");
  try {
    console.log(new URL(request.url).pathname);
    await LoginIn(emails, motdepasse);
    localStorage.setItem("isLoggedIn", true);
    return redirect("/rent");
  } catch (e) {
    return e.message;
  }
}

export default function Login() {
  const [see, isSee] = React.useState(false);
  const [seeInfo, setSeeInfo] = React.useState(false);
  const {islogin:isLoggin ,setisloggin: setIsLoggin} = React.useContext(IsLoggined)

  const navigation = useNavigation();
  const err = useActionData();


  let value__navigation = navigation.status === "submitting";
  function toogle(i) {
    if (!i.target.classList.contains("fa-clipboard")) {
      setSeeInfo((pre) => !pre);
    }
  }
  return (
    <>
      <section className="login">
        <div
          onClick={(i) => toogle(i)}
          className={`message_email ${!seeInfo ? "cancelLeftPadding" : ""}`}
        >
          {seeInfo ? (
            <>
              <h2>Test Email</h2>
              <div>
                <div className="parent_clipBoard">
                  <div className="pr ">
                    <h3>{emailFirst}</h3>
                    <CopyToClipboard text={emailFirst}>
                      <i className="fa-solid special fa-clipboard"></i>
                    </CopyToClipboard>
                  </div>
                </div>
                <br />
                <div className="parent_clipBoard">
                  <div className="pr  ">
                    <h3>{passwordFirst}</h3>
                    <CopyToClipboard text={passwordFirst}>
                      <i className="fa-solid special fa-clipboard"></i>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              <i className="fa-solid close fa-2x fa-xmark"></i>
            </>
          ) : (
            <i
              style={{ float: "right" }}
              className="fa-solid fa-2x fa-circle-question"
            ></i>
          )}
        </div>
        <div className="container">
          <h2 className="title">Login in</h2>
          <Form className="login-form" replace method="post">
            {err && (
              <div className="error-notice">
                <div className="oaerror danger">
                  <strong>Error</strong>- the email address or password is
                  invalid , please try again.
                </div>
              </div>
            )}
            <label htmlFor="email__user">email</label>
            <input
              id="email__user"
              placeholder="type your email"
              type="email"
              name="email"
            />
            <label htmlFor="password__user">password</label>
            <div className="password-input">
              <input
                id="password__user"
                placeholder="type your password"
                type={see ? "text" : "password"}
                name="password"
              />
              <i
                onClick={() => isSee((pre) => !pre)}
                className={`fa-solid special ${
                  see ? "fa-eye" : "fa-eye-slash"
                }`}
              ></i>
            </div>

            <button disabled={value__navigation}>
              {value__navigation ? "logging in...." : "Log in"}
            </button>
          </Form>
        </div>
      </section>
    </>
  );
}
