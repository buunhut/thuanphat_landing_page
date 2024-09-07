import React from "react";

const HomePage = () => {
  return (
    <div id="container">
      <div className="banner"></div>
      <div className="content">
        <div className="contentItem">
          <h1>
            <i className="fa-solid fa-users-gear"></i> About Us
          </h1>
          <p>
            Our company specializes in trading and technology, offering
            high-quality products such as computers, components, network
            equipment, surveillance cameras, and memory cards..., In addition,
            we provide software services, including website design, custom
            software development, and technology consulting. With a team of
            experienced and dedicated professionals, we are committed to
            delivering optimal solutions that meet the technological needs of
            our customers in the digital age.
          </p>
        </div>

        <div className="contentItem">
          <h1>
            <i className="fa-solid fa-screwdriver-wrench"></i> Services
          </h1>
          <ul>
            <li>
              <b>Commerce:</b> We offer a wide range of high-quality technology
              products, including computers, electronic components, network
              equipment, surveillance cameras, and memory cards. All products
              are carefully selected from reputable suppliers to meet the needs
              of both individual and business customers.
            </li>
            <li>
              <b>Website Design:</b> We design professional websites that are
              SEO-friendly and optimized for user experience, helping your
              business establish a strong online presence.
            </li>
            <li>
              <b>Software Development:</b> We provide customized software
              solutions tailored to the specific needs of your business, ranging
              from enterprise management systems to mobile applications.
            </li>
            <li>
              <b>Technology Consulting:</b> With a team of experienced experts,
              we offer effective technology consulting services, helping
              businesses streamline processes and improve operational
              efficiency.
            </li>
          </ul>
          <p>
            Our company is committed to delivering high-quality services that
            fully meet the technological and growth needs of our customers.
          </p>
        </div>
        <div className="contentItem">
          <h1>
            <i className="fa-solid fa-handshake-simple"></i> Partners
          </h1>
          <p>
            We are looking for dynamic partners and collaborators to join us in
            developing a new project. If you are passionate about commerce and
            software development and eager to work in a creative, high-potential
            environment, we would love to hear from you. This is a great
            opportunity to collaborate and achieve groundbreaking success
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
