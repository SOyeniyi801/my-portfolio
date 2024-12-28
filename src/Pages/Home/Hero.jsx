import { Link } from "react-scroll";

function Hero (){
    return(
        <section id="home" className="hero-section">
            <div className='hero-section-content-box'>
                <div className="hero-section-content">
                    <p className="section-title">Hey I'm Sammi</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Freelance</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero-section-description">
                    Transforming visions into dynamic and user-friendly web experiences. <br/> Web developer with a passion for crafting beautiful web experiences.
                    </p> <br/>
                </div>
                <Link
                onClick={() => {}}
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-primary"
                > 
                    Hire Me </Link>
            </div>
            <div className="hero-section-image">
                <img src="./assets/freelance-web-developer-atlanta-sammi-heroimage.png" alt="Hero Section" />
            </div>
        </section>
    )
}

export default Hero;