import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const formEndpoint = "https://formspree.io/f/xyyrdweg"; // Replace with your Formspree endpoint

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    fetch(formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("An error occurred while submitting the form.");
        }
        return response.json();
      })
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSubmitted(false), 5000);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        setSubmitting(false);
        setError(error.message || "An error occurred. Please try again later.");
        setTimeout(() => setError(""), 5000);
      });
  }

 

  function handleReset() {
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setSubmitted(false);
  }

  return (
    <section id="contact" className="relative bg-gray-to-br from-gray-600 to-indigo-600">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap bg-gradient-to-r from-slate-900 to-slate-700 flex-wrap">
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:mr-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-white">
            Have questions or want to discuss a project? Feel free to contact me using the form below.
          </p>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="relative mb-4 flex justify-center">
  <button
    type="submit"
    disabled={submitting}
    className={`text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none rounded text-lg transition-colors duration-300 ${
      submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-600"
    }`}
    style={{ minWidth: "8rem", display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    {submitting ? (
      <>
        <span className="mr-2">Submitting...</span>
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </>
    ) : (
      "Submit"
    )}
  </button>
</div>


          {error && <p className="text-red-500 mt-2">{error}</p>}
          {submitted && <p className="text-green-500 mt-2">Message sent!</p>}
          <div className="flex items-center mt-4">
            <hr className="w-full border-gray-300" />
            <button
              type="button"
              onClick={handleReset}
              className="text-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-bold uppercase px-2 py-2 ml-4 rounded outline-none focus:outline-none transition-colors duration-300"
            >
              Reset
            </button>
          </div>
        </form>
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:ml-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"

            style={{ filter: "opacity(0.7)" }}
            img
            src="https://www.google.com/maps/embed/v1/search?q=Adama+Science+And+Technology+University+-+ASTU,+Adama,+Ethiopia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            alt="Google Maps showing the location of Adama Science And Technology University"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <form className="flex items-center justify-center mt-8">
              <div className="flex flex-col md:flex-row items-center">

                <div className="flex items-center">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="bg-gray-800 text-white border border-gray-700 rounded-l px-4 py-2 focus:outline-none"
                  />
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-r px-4 py-2 focus:outline-none flex items-center animate-pulse">
                    Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3zm16 2a1 1 0 00-1-1H2a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V4zm-4 8a1 1 0 00-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
