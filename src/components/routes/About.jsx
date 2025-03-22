import AboutUs from '../AboutUs';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import AboutImg from "../photos/night.jpg"

function About (){
    return(
        <>
        <Navbar/>
        <Hero
        cName = "hero-mid"
        heroImg = {AboutImg}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;