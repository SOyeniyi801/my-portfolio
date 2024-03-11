import Hero from "../Hero";
import Skills from "../Skils";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";

function Home (){
    return (
        <>
         <Hero />
         <Skills />
         <About />
         <Projects />
         <Contact />
         <Footer />
         
        </> 
    )
}

export default Home;