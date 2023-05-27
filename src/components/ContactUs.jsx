import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export const ContactUs = () => {
  const form = useRef();
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_zpy8e4d", "template_zt07z8f", form.current, "NyloAKEVDE7QVQ7Ys").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="ContactUs">
      <form ref={form} onSubmit={sendEmail} className="form-Items">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>

        <button type="submit" value="Send" className="btnSend" onChange={handleOnChange}>
          Send
        </button>
      </form>
    </div>
  );
};
