// src/pages/Contact.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Contact = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });

  return (
    <animated.div style={props}>
      <h1>Contact Us</h1>
      <section>
        <h2>Our Office</h2>
        <p>123 Business Road, Suite 456<br />City, State, ZIP</p>
      </section>
      <section>
        <h2>Phone</h2>
        <p>(123) 456-7890</p>
      </section>
      <section>
        <h2>Email</h2>
        <p>info@ourcompany.com</p>
      </section>
      <section>
        <h2>Contact Form</h2>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message"></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </animated.div>
  );
};

export default Contact;
