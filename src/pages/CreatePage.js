import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const CreatePage = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("auto email");
    emailjs
      .sendForm("service_3e17sap", "template_bqzrake", form.current, {
        publicKey: "wehBzpYByn2UPF0XH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="container">
      <div className="content">
        <div className="contentItem">
          <h1>Create Account</h1>
          <form action="" ref={form} onSubmit={handleSubmit}>
            <div className="wrap">
              <div className="inputItem">
                <label htmlFor="">Fullname</label>
                <input type="text" name="to_name" />
              </div>
              <div className="inputItem">
                <label htmlFor="">Username</label>
                <input type="text" name="user_name" />
              </div>
              <div className="inputItem">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="inputItem">
                <label htmlFor="">Phone</label>
                <input type="text" name="message" />
              </div>
              <div className="inputItem">
                <label htmlFor="">Email</label>
                <input type="text" name="user_email" />
              </div>
              <div className="inputItem">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
