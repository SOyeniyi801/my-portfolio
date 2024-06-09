function About() {
  return (
    <section id="AboutMe" className="about-section">
      <div className="about-section-img">
        <img src="./assets/about-me.png" alt="About me" />
      </div>
      <div className="hero-section-content-box about-section-box">
        <div className="hero-section-content">
          <p className="section-title">About</p>
          <h1 className="skills-section-heading"> About Me</h1>
          <p className="hero-section-description">
            Hi, I'm Sammi. I'm a new freelance developer specializing in
            creating:
            <ul>
              <li>Landing pages</li>
              <li>Personal and portfolio sites</li>
              <li>Small business websites</li>
              <li>Simple web applications</li>
              <li>Website content management</li>
              <li>Website and copy update services</li>
            </ul>
            I'm ready to start taking on clients and help them with their
            website needs. I am also open to contract opportunities. Feel free
            to contact me with any questions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
