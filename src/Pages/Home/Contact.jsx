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
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult("Submit"), 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => setResult("Submit"), 3000);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-pink-500 font-raleway text-lg">Get In Touch</p>
        <h2 className="text-4xl font-raleway font-bold mb-4">Contact Me</h2>
        <p className="text-open-sans text-lg">Open to inquiries</p>
      </div>
      <form
        onSubmit={sendMessage}
        className="max-w-4xl mx-auto mt-10 space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label htmlFor="first-name" className="flex flex-col">
            <span className="text-md font-raleway text-pink-500">
              First Name
            </span>
            <input
              type="text"
              className="mt-1 bg-black text-white border border-gray-700 rounded-md p-2 text-open-sans"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="flex flex-col">
            <span className="text-md font-raleway text-pink-500">
              Last Name
            </span>
            <input
              type="text"
              className="mt-1 bg-black text-white border border-gray-700 rounded-md p-2 text-open-sans"
              name="last-name"
              id="last-name"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-md font-raleway text-pink-500">Email</span>
            <input
              type="email"
              className="mt-1 bg-black text-white border border-gray-700 rounded-md p-2 text-open-sans"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="flex flex-col">
            <span className="text-md font-raleway text-pink-500">
              Phone Number
            </span>
            <input
              type="number"
              className="mt-1 bg-black text-white border border-gray-700 rounded-md p-2 text-open-sans"
              name="phone-number"
              id="phone-number"
            />
          </label>
        </div>
        <label htmlFor="subject" className="flex flex-col">
          <span className="text-md font-raleway text-pink-500">Subject</span>
          <input
            type="text"
            className="mt-1 bg-black text-white border border-gray-700 rounded-md p-2 text-open-sans"
            name="subject"
            id="subject"
            required
          />
        </label>
        <label htmlFor="message" className="flex flex-col">
          <span className="text-md font-raleway text-pink-500">Message</span>
          <textarea
            className="mt-1 bg-black text-white border border-gray-700 rounded-md p-2 text-open-sans"
            name="message"
            id="message"
            required
            rows="8"
            placeholder="Type your message"
          ></textarea>
        </label>
        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-500 text-white font-raleway px-6 py-2 rounded-md hover:bg-pink-600 transition"
          >
            {result || "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
