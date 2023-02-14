import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import {
  ContactModel,
  contactFields,
  contactModel,
} from "../../models/contact.model";
import { sendContact } from "../../http/contact.http";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = async (p: ContactModel) => {
    try {
      const { data, status } = await sendContact(p);
      if (status === 200 || status === 201) {
        toast.dark("Your message has been sent! I will be in touch shortly.");
      }
    } catch (error) {
      toast.warn("Unable to send message. Please try again later.");
    }
  };
  return (
    <section id="contact">
      <Container>
        <div className="py-10 text-center">
          <h2 className="text-4xl text-gray-200 leading-snug font-semibold">
            Contact
          </h2>
          <p className="text-gray-400 text-lg mb-4">Get in touch with me.</p>
          <div className="bg-slate-800 p-6 rounded-md text-lg max-w-xl mx-auto">
            <Form
              fields={contactFields}
              schema={contactModel}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
