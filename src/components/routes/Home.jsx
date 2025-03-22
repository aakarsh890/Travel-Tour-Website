import Destination from '../Destination';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Trip from '../Trip';

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName = "hero"
        heroImg = "https://images.unsplash.com/photo-1732450101559-fe986d910d32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="choose Your Favourite Destination."
        buttonText='Travel Plan'
        url = "/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;