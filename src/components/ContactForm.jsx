import "./ContactFormStyles.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data via EmailJS
        emailjs
            .sendForm(
                "service_ocfw0gq",  // Replace with your service ID
                "template_fejhkth",  // Replace with your template ID
                e.target,            // Use the form DOM reference
                "No5asTcUsQYV-egWy"  // Replace with your user ID
            )
            .then(
                (result) => {
                    console.log("Message sent successfully", result.text);
                    // Reset form after successful submission
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log("Error sending message", error.text);
                }
            );
    };
    return(
        <div className="from-container">
            <h1>Send a message to us!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name}
                    onChange={handleChange}/>
                <input type="email" name="email" placeholder="Email" value={formData.email}
                    onChange={handleChange} />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject}
                    onChange={handleChange}/>
                <textarea name="message" placeholder="Message" rows="4"value={formData.message}
                    onChange={handleChange}></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;