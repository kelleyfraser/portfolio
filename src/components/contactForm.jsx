import React, { useState, useEffect } from 'react'
import Button from './common/button';
import FootBar from './footBar';

const ContactForm = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mailerState, setMailerState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleStateChange = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:5001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          firstName: "",
          lastName: "",
          message: "",
        });
      });
  };

  return (
    <>
      <section className="contact">
        <div id="contact" className="contact">
          <div><h2>Contact</h2></div>
          <form onSubmit={submitEmail}>
            <div className="input-group half-width">
              <label htmlFor="firstName">First Name</label>
              <input onChange={handleStateChange} type="text" name="firstName" value={mailerState.firstName}></input>
            </div>
            <div className="input-group half-width">
              <label htmlFor="lastName">Last Name</label>
              <input onChange={handleStateChange} type="text" name="lastName" value={mailerState.lastName}></input>
            </div>
            <div className="input-group full-width">
              <label htmlFor="email">Email</label>
              <input onChange={handleStateChange} type="email" name="email" value={mailerState.email}></input>
            </div>
            <div className="input-group full-width">
              <label htmlFor="message">Message</label>
              <textarea onChange={handleStateChange} rows="6" name="message" value={mailerState.message}></textarea>
            </div>
            <Button type="submit" name="Submit" />
          </form>
        </div>
      </section>
      <FootBar />
    </>
  )
}

export default ContactForm;