import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black p-4 items-center w-full fixed z-10 ">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link href='/' className="text-white font-bold text-lg">Wallstreet Schools</Link>
        {/* Navigation */}
        <nav className="space-x-4  ">
          <a className="text-white" href="about">About Us</a>
          <a className="text-white" href="#contact">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
