import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import AboutImg from "../photos/night.jpg"
import Trip from '../Trip';

function Service (){
    return(
        <>
        <Navbar/>
        <Hero
        cName = "hero-mid"
        heroImg = {AboutImg}
        title="Service"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;