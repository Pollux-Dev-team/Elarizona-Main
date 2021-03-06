import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import { changeLocale, IntlContextConsumer, useIntl } from "gatsby-plugin-intl";
import { StaticImage } from "gatsby-plugin-image";

const dict = {
  ar: "English",
  en: "العربية",
};

const LangSelector = ({ className }) => (
  <IntlContextConsumer>
    {({ language }) => (
      <Button
        className={`text-sm ${className}`}
        onClick={() => changeLocale(language === "en" ? "ar" : "en")}
      >
        <span className={`w-full text-right md:text-center`}>
          {dict[language]}
        </span>
      </Button>
    )}
  </IntlContextConsumer>
);

const Header = () => {
  const intl = useIntl();

  return (
    <header className="sticky top-0 bg-white shadow" style={{ zIndex: "1" }}>
      <div className="container flex flex-wrap items-center justify-between p-3 mx-auto">
        <div className="flex items-center justify-around w-1/3 md:w-1/6">
          <StaticImage
            src="../../images/logo.png"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={45}

            // imgStyle={logoImage}
          />
          <span className="text-xl md:text-2xl -ml-5">
            {intl.formatMessage({ id: "name" })}
          </span>
        </div>

        <div className="flex md:hidden">
          <button
            id="hamburger"
            onClick={() => {
              const navToggle = document.getElementsByClassName("toggle");
              for (let i = 0; i < navToggle.length; i++) {
                navToggle.item(i).classList.toggle("hidden");
              }
            }}
          >
            <img
              className="toggle block"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="menu squared"
            />
            <img
              className="toggle hidden"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="close window"
            />
          </button>
        </div>
        <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-red-200 md:border-none">
          <AnchorLink
            href="#about-us"
            className="block md:inline-block px-4 border-b-2 border-red-300 md:border-none "
          >
            {intl.formatMessage({ id: "about_us" })}
          </AnchorLink>
          <AnchorLink
            href="#services"
            className="block md:inline-block px-4 border-b-2 border-red-300 md:border-none"
          >
            {intl.formatMessage({ id: "services" })}
          </AnchorLink>
          <AnchorLink
            href="#contact"
            className="block md:inline-block px-4 border-b-2 border-red-300 md:border-none"
          >
            {intl.formatMessage({ id: "contact" })}
          </AnchorLink>
          <AnchorLink
            href="#our-location"
            className="block md:inline-block px-4 border-b-2 border-red-300 md:border-none"
          >
            {intl.formatMessage({ id: "our_location" })}
          </AnchorLink>
        </div>
        <div className="w-full md:w-1/6 toggle hidden md:block">
          <LangSelector className="md:w-1/7 md:flex w-full md:w-auto px-4 py-2 text-right mt-2 md:mt-0 flex" />
        </div>
      </div>
    </header>
  );
};

export default Header;
