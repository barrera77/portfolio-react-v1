import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const validationKey = import.meta.env.VITE_EMAIL_VALIDATION;
  const serviceKey = import.meta.env.VITE_EMAIL_SERVICE;

  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        serviceKey,
        "portfolio_template",
        formRef.current,
        validationKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex gap-10 overflow-hidden">
      <div className="w-full">
        <div
          className={`${styles.paddingY} ${styles.paddingX} sm:pl-4 md:pl-16 md:w-[95%] lg:w-[75%] m-auto border-l-2 border-gradient`}
        >
          <h2 className={`${styles.heroSubHeaderText}`}>Contact</h2>
          <p className="mt-4 py-3 text-white font-bold underline xs:text-[24px] md:text-[32px] max-w-3xl leading-[30px]">
            Get in touch with me.
          </p>

          <p className={`${styles.heroSubText} mt-4 max-w-3xl`}>
            Thank you for taking the time to check my website!
            <br />
            <br />
            Have an opportunity, or just want to say hello? Please write a
            message below, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div
          className={`${styles.paddingX} ${styles.paddingY} xs:px-0 sm:px-10 md:w-[85%] lg:w-[70%] m-auto bg-transparent`}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="xs:p-5 p-8 rounded-xl border border-secondary bg-primary"
          >
            <div>
              <div className="flex xs:flex-col md:flex-row justify-between">
                <div className="md:w-[45%] xs:w-full">
                  <label htmlFor="name" className="text-white text-[18px]">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name Here ..."
                    required
                    className="w-full placeholder:text-primary text-primary font-medium border-secondary py-2 px-3 my-2 outline-none rounded-lg"
                  />
                </div>

                <div className="md:w-[45%] xs:w-full">
                  <label htmlFor="email" className="text-white text-[18px]">
                    Your email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email Here ..."
                    className="w-full placeholder:text-primary text-primary font-medium border-secondary py-2 px-3 my-2 outline-none rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="text-white text-[18px]">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Message Here ..."
                  required
                  rows="6"
                  className="w-full placeholder:text-primary text-primary font-medium border border-secondary py-2 px-3 my-2 outline-none rounded-lg"
                ></textarea>
              </div>
            </div>
            <div className="xs:mt-4 mt-8 w-full py-3">
              {/* <button
                type="submit"
                className="w-full text-[18px] hover:text-primary hover:bg-white py-2 px-3 rounded-lg bg-transparent hover:border-white border border-secondary text-white"
              >
                Send Message
              </button> */}

              <button
                type="submit"
                disabled={loading}
                className={`w-full text-[18px] ${
                  loading ? "bg-gray-400" : "hover:bg-white hover:text-primary"
                } py-2 px-3 rounded-lg border border-secondary text-white`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
