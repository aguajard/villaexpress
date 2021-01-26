import React from "react";
import dolar from "../../assets/img/camionetadolar.svg";
import refri from "../../assets/img/camionetafrio.svg";
import ecomer from "../../assets/img/camionetaecomer.svg";
import tchile from "../../assets/img/camionetachile.svg";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-negro to-negro1 text-white px-4 font-villa text-2xl lg:px-32">
      <div className="grid grid-cols-2 pt-5 md:grid-cols-3">
        <div className="grid justify-items-center col-span-2 md:col-span-3 md:justify-items-start">
          <h1 className="border-2 rounded-md border-verde text-4xl px-2">
            MIS SERVICIOS
          </h1>
        </div>
        <div className="grid justify-items-center pt-11">
          <div>
            <img src={dolar} alt="economico" className="w-32 md:w-44"></img>
          </div>
          <div className="pt-4">Fletes Economicos</div>
        </div>
        <div className="grid justify-items-center pt-11">
          <div className="">
            <img src={refri} alt="refigerado" className="w-32 md:w-44"></img>
          </div>
          <div className="pt-4">Transporte Refrigerados</div>
        </div>
        <div className="grid justify-items-center pt-7 col-span-2 md:col-span-1 md:pt-11">
          <div className="">
            <img src={ecomer} alt="ecomerce" className="w-32 md:w-44"></img>
          </div>
          <div className="pt-4">Transporte E-commers</div>
        </div>
        <div className="grid justify-items-center pt-7 pb-5 col-span-2 md:col-span-3 md:pt-11">
          <div className="">
            <img src={tchile} alt="todo chile" className="w-48 md:w-60"></img>
          </div>
          <div className="pt-4">Transporte desde Santiago a todo Chile</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
