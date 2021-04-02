import React from 'react';
import logoImg from "../../images/logo.png";

const Footer = () => (
  <footer className="pt-24 pb-12 px-12 text-gray-800 w-full bg-white flex md:flex-row flex-col">
    <div className="flex" style={{ flex:"1" }}>
      <div className="px-12 w-full flex justify-center">
        <img src={logoImg} className="" style={logo}/>
      </div>
    </div>
    <div className="flex -mx-3 justify-center flex-col md:flex-row " style={{ flex:"3" }}>
      <div className="flex-1 px-3 pt-6 md:pt-0">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-1 md:mt-5">Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.</p>
      </div>
      <div className="flex-1 px-3 pt-6 md:pt-0">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-1 md:mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3 pt-6 md:pt-0">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-1 md:mt-4 leading-loose">
          <li>
            <a href="https://www.facebook.com/arizona4sweet">Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com/arizona4sweet?igshid=exa73jsv7o5x">Instagram</a>
          </li>
          <li>
            <a href="http://wa.link/a90wp9">whatsapp</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

const logo = {
  width: "170px",
  marginTop: "-70px",
}

export default Footer;
