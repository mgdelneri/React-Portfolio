import "./style.css";
import React, { useState } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { validateEmail } from "../../../utils/helpers";

const Contact = () => {
  return (
    <div>
      <h1 id="contactMe">Contact Me</h1>
      <Navigation />
      <Footer />
    </div>
  );
};

export default Contact;
