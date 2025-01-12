import Hero from "../Hero";
import Skills from "../Skils";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import Graphics from "../Graphics";

function Home (){
    return (
        <>
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Graphics />
         <Contact />
         <Footer />
        </> 
    )
}

export default Home;