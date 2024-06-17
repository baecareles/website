// src/pages/Home.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
      <section>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
      </section>
      <section>
        <h2>Latest News</h2>
        <p>Stay updated with our latest news and events.</p>
      </section>
      <section>
        <h2>Featured Services</h2>
        <p>Discover our range of services designed to help you succeed.</p>
      </section>
    </animated.div>
  );
};

export default Home;
