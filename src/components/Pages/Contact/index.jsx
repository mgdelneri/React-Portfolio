import "./style.css";
import React, { useState } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { validateEmail } from "../../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleBlank(e) {
    if (e.target.name === "Name" || e.target.name === "Message") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <div>
      <h1 id="contactMe">Contact Me</h1>
      <Navigation />
      <form id="contactForm">
        <div className="formItem" id="formName">
          <label htmlFor="Name">Name:</label>
          <br></br>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleBlank}
            name="Name"
          />
        </div>
        <div className="formItem" id="formEmail">
          <label htmlFor="email">Email:</label>
          <br></br>
          <input 
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div className="formItem" id="formMessage">
          <label htmlFor="Message">Message:</label>
          <br></br>
          <textarea
            name="Message"
            defaultValue={message}
            onBlur={handleBlank}
            rows="6"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="errorText">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
