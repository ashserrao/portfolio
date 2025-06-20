import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    mailTo: "ashlinserrao3@gmail.com",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.mailTo) {
      alert("Please select an email option.");
      return;
    }

    const subject = encodeURIComponent(`Protfolio Contact: ${formState.name}`);
    const body = encodeURIComponent(`${formState.message}`);

    const mailtoLink = `mailto:${formState.mailTo}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setFormState({
      name: "",
      email: "",
      message: "",
      mailTo: "ashlinserrao3@gmail.com",
    });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#6A0C0B] to-[#AA0505]"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#8cfcfb]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-[#c2ccaa]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="bg-[#9c5450] border border-[#c2ccaa] text-[#c2ccaa] text-sm rounded-lg w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-[#c2ccaa]">
              Enter you Email
            </label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="bg-[#9c5450] border border-[#c2ccaa] text-[#c2ccaa] text-sm rounded-lg w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-[#c2ccaa]">
              Message
            </label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className="bg-[#9c5450] border border-[#c2ccaa] text-[#c2ccaa] text-sm rounded-lg w-full p-2.5"
              required
            ></textarea>
          </div>
          {/* <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-[#c2ccaa]">
              Send To
            </label>
            <select
              name="mailTo"
              value={formState.mailTo}
              onChange={handleChange}
              className="bg-[#9c5450] border border-[#c2ccaa] text-[#c2ccaa] text-sm rounded-lg w-full p-2.5"
              required
            >
              <option value="">Select an email</option>
              <option value="ashlinserrao3@gmail.com">Support</option>
              <option value="sales@example.com">Sales</option>
              <option value="info@example.com">Info</option>
            </select>
          </div> */}
          <motion.button
            type="submit"
            className="bg-[#67C7EB] hover:bg-[#8cfcfb] text-[#582726] font-bold py-2 px-4 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
