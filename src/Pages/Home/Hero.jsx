function Hero (){
    return(
        <section id="heroSection" className="hero-section">
            <div className='hero-section-content-box'>
                <div className="hero-section-content">
                    <p className="section-title">Hey I'm Sammi</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Front End</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero-section-description">
                    From pixels to perfection, turning ideas into interactive wonders. <br/> Junior frontend developer with a passion for crafting beautiful web experiences.
                    </p>
                </div>
                <button className="btn btn-primary"> Get in touch</button>
            </div>
            <div className="hero-section-image">
                <img src="./assets/hero-image.png" alt="Hero Section" />
            </div>
        </section>
    )
}

export default Hero;