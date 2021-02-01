import React from "react";
import wsp from "../../assets/img/wsp.svg";
import mail from "../../assets/img/mail.svg";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gradverde to-gradverdefinal px-4 pb-5 font-villa text-2xl lg:px-32">
      <div className="grid grid-cols-1 pt-5 md:grid-cols-2">
        <div className="grid justify-items-center col-span-1 md:col-span-2 md:justify-items-start">
          <h1 className="border-2 rounded-md border-black text-4xl px-2">
            CONTACTAME
          </h1>
        </div>
        <div className="grid justify-items-center grid-cols-1">
          <div className="pt-7">
            <h2 className="text-7xl md:text-5xl">Whatsapps</h2>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-4xl">Toca el icono</p>
          </div>
          <div className="pt-4">
            <a href="https://wa.me/56935453848">
              <img src={wsp} alt="wsp" className="w-40"></img>
            </a>
          </div>
        </div>
        <div className="grid justify-items-center grid-cols-1">
          <div className="pt-7">
            <h2 className="text-7xl md:text-5xl">E-mail</h2>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-4xl">contacto@villaexpress.cl</p>
          </div>
          <div className="pt-4">
            <a href="mailto:contacto@villaexpress.cl">
              <img src={mail} alt="mail" className="w-40"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
