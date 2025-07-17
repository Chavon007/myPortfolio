"use client";
import "./contact.css";
import { useState } from "react";
import Links from "./links";
function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setErrorMessage("Please fill the required fields");
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Enter a valid email address");
      return;
    } else {
      setErrorMessage("Email Sent Successfully");

      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    }
  };

  return (
    <div className="container">
      <div className="contact">
        <div className="contact-content">
          <div className="contact-content-header">
            <h2>Get In Touch</h2>
            <p>Let's work together</p>
          </div>

          <div className="contact1">
            <div className="contact-content-link">
              <Links />
            </div>

            <div className="contact-content-form">
              <form onSubmit={handleSubmit}>
                <div className="error">
                  {errorMessage && (
                    <p
                      style={{
                        color: errorMessage.includes("Successfully")
                          ? "green"
                          : "red",
                        fontSize: "14px",
                        marginBottom: "10px",
                      }}
                    >
                      {errorMessage}
                    </p>
                  )}{" "}
                </div>
                <div className="name">
                  <input
                    type="text"
                    value={formData.fullname}
                    name="fullname"
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    value={formData.email}
                    name="email"
                    placeholder="Enter Your email address"
                    onChange={handleChange}
                  />
                </div>
                <input
                  className="subject"
                  type="text"
                  value={formData.subject}
                  name="subject"
                  placeholder="Your subject"
                  onChange={handleChange}
                />
                <textarea
                  value={formData.message}
                  name="message"
                  placeholder="Enter message"
                  onChange={handleChange}
                ></textarea>

                <button className="contactbtn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
