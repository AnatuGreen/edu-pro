import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-4 text-white text-center">
      <p>
        Created with love in Nigeria by Anatu Green &copy; {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
