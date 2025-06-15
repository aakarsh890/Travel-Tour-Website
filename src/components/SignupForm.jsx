import React, { useState } from "react";
import "./SignUpFormStyles.css";

function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        destination: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf5lwA4BR07L6XDCXLGTjNIoPQVD1VvPBYmpiBU11oenNpCpg/formResponse";

        const formDataEncoded = new URLSearchParams();
        formDataEncoded.append("entry.1275877865", formData.name);
        formDataEncoded.append("entry.2119260847", formData.email);
        formDataEncoded.append("entry.300474874", formData.phone);
        formDataEncoded.append("entry.553142469", formData.destination);

        fetch(formUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formDataEncoded.toString()
        })
        .then(() => {
            alert("Form submitted successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                destination: ""
            });
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
            alert("Error submitting form.");
        });
    };

    return (
        <div className="form-container">
            <h1>Sign Up For Your Tour</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    required
                />
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                />
                <input
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Destination"
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default SignupForm;
