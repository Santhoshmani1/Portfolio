/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  function sendMail(event) {
    event.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    console.log(name, email, message);
    notify();
    const contactNumber = Math.floor(Math.random() * 100000);
    const form = event.target;
    form.contact_number.value = contactNumber;
    emailjs
      .sendForm("service_portfolio_sandev", "template_f6l14fj", form)
      .then(() => {
        console.log("SUCCESS!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  }

  function notify() {
    toast.success("Email sent Successfully ", {
      position: toast.POSITION.BOTTOM_CENTER,
      toastId: "customId",
      icon: "📧",
    });
  }

  (function () {
    emailjs.init("0jOAbCBLw9Ymv5HK8");
  })();

  return (
    <>
      <section id="contact">
        <div id="contact-container">
          <h2>Contact</h2>
          <form action="post" id="contact-form" onSubmit={sendMail}>
            <div className="form-group">
              <input type="hidden" name="contact_number" />
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="from_name"
                placeholder="Enter your name"
                required
                minLength={5}
                autoComplete="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="from_email"
                placeholder="Enter Email address"
                minLength={10}
                required
                autoComplete="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                style={{ fontFamily: "Open sans", fontSize: "1rem" }}
                className="form-control"
                name="message"
                id="message"
                minLength={10}
                rows="10"
                cols="40"
                required
              ></textarea>
            </div>
            <div className="button-container">
              <button type="submit" className="contact-submit" value="Send">
                Submit
              </button>
              <ToastContainer autoClose={1500} />
            </div>{" "}
          </form>
        </div>
      </section>
    </>
  );
};
