import "./FooterStyles.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>aakarsh</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href='https://www.facebook.com/aakarsh.verma.908'>
                      <i className="fa-brands fa-facebook-square"></i>
                    </a>

                    <a href='https://www.facebook.com/aakarsh.verma.908'>
                      <i className="fa-brands fa-instagram-square"></i>
                    </a>

                    <a href='https://www.facebook.com/aakarsh.verma.908'>
                    <i className="fa-brands fa-linkedin"></i>
                    </a>

                    <a href='https://www.facebook.com/aakarsh.verma.908'>
                      <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Aakarsh</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privary Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;