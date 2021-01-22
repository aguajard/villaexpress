import React from "react";
import Burger from "./Burger";

import logob from "../../assets/img/Express.png";

const header = () => {
  return (
    <div className="bg-black text-white px-8 pt-2 font-villa text-2xl lg:px-32 ">
      {/*CONTENEDOR--MIGAS DE PAN*/}
      <div className="w-52 float-left">
        <img src={logob} alt="logo"></img>s
      </div>
      <div className="pt-10">
        <ul className="flex justify-end">
          <li className="border-2 rounded-md border-white px-2 hover:bg-green-300 ">SERVICIOS</li>
          <li className="border-2 rounded-md border-white px-2 hover:bg-green-300 mx-5">CONTACTO</li>
          <li className="border-2 rounded-md border-white px-2 hover:bg-green-300">COTIZACION</li>
        </ul>
      </div>
    </div>
  );
};

export default header;
