import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; 2024 TSF Bank. All rights reserved.
        </div>
        <div className="text-sm">
          <a href="#" className="text-white hover:text-gray-400 px-2">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-gray-400 px-2">
            Terms of Service
          </a>
          <a href="#" className="text-white hover:text-gray-400 px-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
