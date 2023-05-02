import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vrw02w9",
        "template_y18zmnf",
        form.current,
        "ZdCVY39F4HA6NW290"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fortuneoliseyenum12@gmail.com</h5>
            <a href="mailto:fortuneoliseyenum12@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiFillTwitterSquare className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>fortune oliseyenum</h5>
            <a href="https://twitter.com/TheLightHouseT5" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2349060955362</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2349060955362"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            name="name"
            type="text"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
