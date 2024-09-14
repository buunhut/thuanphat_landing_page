import React from "react";

const ContactPage = () => {
  return (
    <div id="container">
      <div className="content">
        <div className="contentItem">
          <h1>Contact</h1>
          <form action="">
            <div className="inputItem">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="inputItem">
              <i className="fa-solid fa-envelope"></i>
              <input type="text" placeholder="Your e-mail" />
            </div>
            <div className="inputItem">
              <i className="fa-solid fa-phone"></i>
              <input type="text" placeholder="Your phone" />
            </div>
            <div className="inputItem">
              <textarea name="" id="" placeholder="Message..."></textarea>
            </div>
            <button type="button">
              {" "}
              <i className="fa-solid fa-paper-plane"></i> Contact me
            </button>
          </form>
        </div>
        <div className="contentItem">
          <h1>Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1047689287384!2d106.68301017553947!3d10.803287258696646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528dafc0ba27f%3A0x63c2abb02cb28043!2zMTE1LzI2IMSQLiBQaGFuIMSQxINuZyBMxrB1LCBQaMaw4budbmcgNywgUGjDuiBOaHXhuq1uLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1725599234157!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
