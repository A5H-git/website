import React from "react";

import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <section className="contact h-screen flex items-center justify-center px-4 py-8">
      <div className="h-auto w-full min-w-[32rem] sm:w-1/2 p-6 shadow-lg rounded-lg">
        <h1 className="mb-6 text-2xl font-bold">Let&apos;s Connect</h1>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
