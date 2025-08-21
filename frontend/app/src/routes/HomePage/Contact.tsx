import React from "react";

import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <section className="contact h-screen flex items-center justify-center">
      <div className="h-auto w-full sm:w-1/2 p-6 shadow-lg rounded-md">
        <h1 className="mb-6 text-2xl font-bold">Let&apos;s Connect</h1>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
