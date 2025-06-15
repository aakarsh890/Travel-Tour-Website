import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import AboutImg from "../photos/1.jpg"
import SignupForm from '../SignupForm';


function SignUp (){
    return(
        <>
        <Navbar/>
        <Hero
        cName = "hero-mid"
        heroImg = {AboutImg} 
        title="Sign up"
        btnClass="hide"
        />
        <SignupForm/>
        <Footer/>
        </>
    )
}

export default SignUp;