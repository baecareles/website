// src/pages/OurClients.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const OurClients = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  return (
    <animated.div style={props}>
      <h1>Our Clients</h1>
      <section>
        <h2>Client 1</h2>
        <p>Client 1 has been a partner since 2015. We helped them achieve remarkable growth.</p>
      </section>
      <section>
        <h2>Client 2</h2>
        <p>Client 2 is a leader in their industry. Our solutions have optimized their operations.</p>
      </section>
      <section>
        <h2>Client 3</h2>
        <p>Client 3 collaborates with us on innovative projects that push the boundaries.</p>
      </section>
      <section>
        <h2>Client 4</h2>
        <p>Client 4 has seen significant improvements in their performance through our services.</p>
      </section>
    </animated.div>
  );
};

export default OurClients;
