import { useState } from "react";

function Contact() {
    const [result, setResult] = useState("Submit");

    const sendMessage = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "387ecfa3-fc55-463f-868e-ac26811f1e09");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          setTimeout(() => setResult("Submit"), 3000)
        } else {
          console.log("Error", data);
          setResult(data.message);
          setTimeout(() => setResult("Submit"), 3000)
        }
      };
    
    return (
        <section id="Contact" className="contact-section">
            <div>
                <p className="sub-title"> Get In Touch</p>
                <h2>Contact Me</h2>
                <p>Open to inquiries</p>
            </div>
            <form onSubmit={sendMessage} className="contact-form-container">
                <div className="container">
                    <label 
                        htmlFor="firstName" 
                        className="contact-label"
                    >
                        <span className="text-md"> First Name</span>
                        <input 
                            type="text" 
                            className="contact-input text-md" 
                            name="first-name" 
                            id="first-name" 
                            required/>
                    </label>
                    <label 
                        htmlFor="lastName" 
                        className="contact-label"
                    >
                        <span className="text-md"> Last Name</span>
                        <input 
                            type="text" 
                            className="contact-input text-md" 
                            name="last-name" 
                            id="last-name" 
                            />
                    </label>
                    <label 
                        htmlFor="email" 
                        className="contact-label"
                    >
                        <span className="text-md">Email</span>
                        <input 
                            type="email" 
                            className="contact-input text-md" 
                            name="email" 
                            id="email" 
                            required/>
                    </label>
                    <label 
                        htmlFor="phoneNumber" 
                        className="contact-label"
                    >
                        <span className="text-md">Phone Number</span>
                        <input 
                            type="number" 
                            className="contact-input text-md" 
                            name="phone-number" 
                            id="phone-number" 
                            />
                    </label>
                </div>
                <label 
                        htmlFor="subject" 
                        className="contact-label"
                    >
                        <span className="text-md">Subject</span>
                        <input 
                            type="text" 
                            className="contact-input text-md" 
                            name="subject" 
                            id="subject" 
                            required/>
                    </label>
                    <label 
                        htmlFor="message" 
                        className="contact-label"
                    >
                        <span className="text-md">Message:</span>
                        <textarea  
                                className="contact-input text-md" 
                                name="message"
                                id="message" 
                                required
                                rows="8"
                                placeholder="type your message"
                                >
                        </textarea>
                    </label>
                <div>
                    <button className="btn btn-primary contact-form-btn">{result}</button>
                </div>

            </form>
        </section>
    )
}

export default Contact;