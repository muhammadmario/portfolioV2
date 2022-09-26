import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import matriks from "../assets/img/matriks.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_twbd9x9",
        "template_r0k6uye",
        form.current,
        "lf3LMJh1umykR6qA4"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Message successfull send", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="flex w-full flex-col px-2 mt-7 gap-3 md:gap-0 md:mt-7 "
      id="contact"
    >
      <h1 className="font-bold text-xl text-center md:text-3xl">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-7">
        <div className=" flex justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex gap-1 flex-col w-full md:w-3/4 bg-[#EEEEEE] p-10 border-2 border-[#2C3333]"
          >
            <label htmlFor="user_name">Your Name</label>
            <input
              type="text"
              name="user_name"
              className="px-2 py-2 border-2 border-[#2C3333]"
            />
            <label htmlFor="user_email">Your Email</label>
            <input
              type="email"
              name="user_email"
              className="px-2 py-2 border-2 border-[#2C3333]"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="min-h-[124px] md:min-h-[224px] border-2 border-[#2C3333] px-2 py-2"
            />
            <button
              type="submit"
              value="Send"
              className="border-[#2C3333] border-2 px-2 py-1 mt-3 md:px-4 md:py-2 hover:bg-[#2C3333] transition  hover:text-[#eeeeee]"
            >
              Submit
            </button>
          </form>
          <ToastContainer />
        </div>
        <div className="hidden md:flex md:justify-center md:items-end ">
          <img src={matriks} alt="matriks" className="animate-bounce-slow" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
