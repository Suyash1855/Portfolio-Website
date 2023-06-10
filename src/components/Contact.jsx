import React from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../Utils/Motion";

const Contact = () => {
  const formRef = useRef();
  const [errorr, setError] = useState(false);
  const [form, useForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    useForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!form.name || !form.email || !form.message) {
      setError(true);
      setLoading(false);
      useForm({
        name: "",
        email: "",
        message: "",
      });
      alert("Please fill in all the fields.");
    }
    // pQHTyzhb5FsUmHmsj
    else {
      emailjs
        .send(
          "service_xmvapbg",
          "template_ow02eig",
          {
            from_name: form.name,
            to_name: "Suyash",
            from_email: form.email,
            to_email: "suyash0448@gmail.com",
            message: form.message,
          },
          "pQHTyzhb5FsUmHmsj"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            useForm({
              name: "",
              email: "",
              message: "",
            });
            errorr(false);
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong");
          }
        );
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row  justify-center items-center flex-col-reverse  gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" xl:w-[500px] lg:w[450px] md:w-[400px] w-[350px] bg-black-100 p-10 rounded-2xl"
      >
        <p className="sm:text-[18px]  text-[14px] text-secondary uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-5  mb-0 z-[100] flex flex-col gap-5"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What is your name?"
              onChange={handleChange}
              value={form.name}
              className="rounded-lg outline-none font-medium border-none bg-tertiary py-3 px-6
              text-white  "
            />

            <span className="text-white font-medium my-3">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What is your email?"
              onChange={handleChange}
              value={form.email}
              className="rounded-lg outline-none font-medium border-none bg-tertiary py-3 px-6
              text-white  "
            />

            <span className="text-white font-medium my-3">Your Message</span>
            <textarea
              rows="5"
              name="message"
              placeholder="Message...."
              onChange={handleChange}
              value={form.message}
              className="rounded-lg outline-none font-medium border-none bg-tertiary py-3 px-6
              text-white  "
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl shadow-primary"
            type="submit"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:h-[650px] md:w-[450px] w-[400px] h-[400px] md:h-[450px] xl:w-[600px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
