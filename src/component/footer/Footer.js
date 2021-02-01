import React from "react";
import logoalvaro from "../../assets/img/logoalvaroblanco.svg";
import logo from "../../assets/img/Express.svg";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="grid justify-items-center">
          <img src={logo} alt="logo" className="w-60"></img>
        </div>
        <div className="grid justify-items-center pt-8 text-xl md:justify-items-end md:text-base md:pt-11">
          <h3 className="text-white pb-4">Sitio creado por</h3>
        </div>
        <div className="grid justify-items-center pb-8 text-xl md:pt-4">
          <a href="https://wa.me/56935453848">
            <img src={logoalvaro} alt="logoalvaro" className="w-52"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
