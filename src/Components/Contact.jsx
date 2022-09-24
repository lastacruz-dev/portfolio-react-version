import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8txlg6i",
        "template_email",
        form.current,
        "YC2C9c_-Ff4j-AQLx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Message Sent");
  }

  return (
    <div className="app">
      <footer className="contact" id="contact">
        <div className="container  flow-content">
          <h2 className="align-left-title">Contact</h2>
          <form ref={form} onSubmit={sendEmail} class="form">
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" autocomplete="off" />
            </div>
            <div>
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
          <div class="copy ">Portfolio - Made with love</div>
        </div>
      </footer>
    </div>
  );
}
