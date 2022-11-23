import React, { useState, useEffect } from 'react';
import { Axios, db } from '../firebase/firebaseConfig';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    setMailerState({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  };

  const sendEmail = () => {
    Axios.post('https://us-central1-nodemailer-api-34dea.cloudfunctions.net/submit', mailerState).then(res => {
      db.collection('emails').add({
        firstName: mailerState.firstName,
        lastName: mailerState.lastName,
        email: mailerState.email,
        message: mailerState.message,
        time: new Date(),
      })
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <section className="contact">
        <div id="contact" className="contact">
          <div><h2>Contact</h2></div>
          <form onSubmit={handleSubmit}>
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