// src/pages/Services.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Services = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.div style={props}>
      <h1>Services</h1>
      <section>
        <h2>Consulting</h2>
        <p>We offer expert consulting services to help you achieve your business goals.</p>
      </section>
      <section>
        <h2>Development</h2>
        <p>Our development team can build custom solutions tailored to your needs.</p>
      </section>
      <section>
        <h2>Support</h2>
        <p>We provide ongoing support to ensure your success.</p>
      </section>
      <section>
        <h2>Training</h2>
        <p>Our training programs are designed to help your team develop the skills they need.</p>
      </section>
    </animated.div>
  );
};

export default Services;
