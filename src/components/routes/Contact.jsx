import ContactForm from '../ContactForm';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import AboutImg from "../photos/1.jpg"


function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName = "hero-mid"
        heroImg = {AboutImg} 
        title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;