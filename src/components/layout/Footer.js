import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => (
  <footer className="pt-24 pb-12 px-12 text-gray-800 w-full bg-white flex flex-col">
    <div className="div flex md:flex-row flex-col">
      <div className="flex" style={{ flex: "1" }}>
        <div className="px-12 w-full flex justify-center">
          <StaticImage
            src="../../images/logo.png"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={170}
            style={logo}
          />
        </div>
      </div>
      <div
        className="flex flex-1 -mx-3 justify-center flex-col md:flex-row "
        style={{ flex: "3" }}
      >
        <div className="flex-1 px-3 pt-6 md:pt-0">
          <h2 className="text-lg font-semibold mt-5">Our Location</h2>
          <p className="md:mt-3">57 Baker Street, London, Uk</p>
        </div>
        <div className="flex-1 px-3 pt-6 md:pt-0">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="mt-1 md:mt-4 leading-loose">
            <li>
              <a href="https://www.facebook.com/arizona4sweet">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com/arizona4sweet?igshid=exa73jsv7o5x">
                Instagram
              </a>
            </li>
            <li>
              <a href="http://wa.link/a90wp9">whatsapp</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center -mb-6 text-large">
      Made by Pollux. © {new Date().getFullYear()} Al Arizona. All Rights
      Reserved.
    </div>
  </footer>
);

const logo = {
  marginTop: "-70px",
};

export default Footer;
