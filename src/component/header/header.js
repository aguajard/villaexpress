import React from "react";
import Burger from "./Burger";

import logob from "../../assets/img/Express.png";

const header = () => {
  return (
    <div className="bg-black h-28 text-white px-8 pt-2 font-villa text-2xl md:h-32 lg:px-32 ">
      {/*CONTENEDOR--MIGAS DE PAN*/}
      <div className="w-40 float-left ml-2 md:w-52 md:ml-0">
        <img src={logob} alt="logo"></img>
      </div>
      <div className="pt-10 w-0 invisible md:visible md:w-auto">
        <ul className="flex justify-end">
          <li className="border-2 rounded-md border-verde px-2 hover:bg-verde">SERVICIOS</li>
          <li className="border-2 rounded-md border-verde px-2 hover:bg-verde mx-5">CONTACTO</li>
          <li className="border-2 rounded-md border-verde px-2 hover:bg-verde">COTIZACION</li>
        </ul>
      </div>
      <Burger />
    </div>
  );
};

export default header;
