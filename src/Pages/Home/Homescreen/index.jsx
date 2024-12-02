import Hero from "../Hero";
import Skills from "../Skils";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import Graphics from "../Graphics";
import Videos from "../Videos";

function Home (){
    return (
        <>
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Graphics />
         <Videos />
         <Contact />
         <Footer />
        </> 
    )
}

export default Home;