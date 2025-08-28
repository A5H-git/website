import React from "react";

import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <section 
      id="contact" 
      className=""
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 flex justify-center">
        <div className="w-full w-3/2 lg:w-1/2 p-6 shadow-lg rounded-lg bg-card">
          <h1 className="mb-6 text-2xl font-bold">Let&apos;s Connect</h1>
          <ContactForm />
        </div>

      </div>
    </section>
  );
}

export default Contact;
