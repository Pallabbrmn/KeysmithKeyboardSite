import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sm:text-4xl font-Montserrat font-extralight flex justify-between py-10">
      <div>
        <h1 className="font-light">Keysmith Limited</h1>
        <p className="sm:text-2xl">All rights reserved.</p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row sm:gap-10">
          <h1 className="cursor-pointer">About</h1>
          <h1 className="cursor-pointer">Contact</h1>
          <h1 className="cursor-pointer">Privacy</h1>
          <h1 className="cursor-pointer">Terms of service</h1>
        </div>
        <div className="icons flex gap-1">
          <FaFacebookSquare className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaSquareXTwitter className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
