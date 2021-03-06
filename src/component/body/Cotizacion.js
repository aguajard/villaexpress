import React from "react";
import auto from "../../assets/img/Peugeot.svg";

const Cotizacion = () => {
  return (
    <div className="bg-gradient-to-b from-negro to-negro1 text-white px-8 pb-8 font-villa text-2xl lg:px-32">
      <div className="pt-5">
        <div className="grid justify-items-center md:justify-items-start">
          <h1 className="border-2 rounded-md border-verde text-4xl px-2">
            COTICACIONES
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 md:float-left md:pt-64 md:mr-5">
        <div className="grid justify-items-center md:place-content-center">
          <img src={auto} alt="Peugeot" className="w-72 pt-8 md:w-96"></img>
        </div>
      </div>
      <div className="pt-7 md:w-full">
        <form className="grid grid-cols-5">
          <div className="grid justify-items-center md:justify-items-start col-span-5">
            DATOS DE CONTACTO
          </div>
          <div className="col-span-5 lg:col-span-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="first-name"
            ></label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 
              leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde 
              focus:border-transparent lg:py-1"
              id="Name"
              type="text"
              placeholder="Nombre Completo"
            />
          </div>
          <div className="col-span-5 lg:col-span-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="EMail"
            ></label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 
              leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde 
              focus:border-transparent lg:py-1"
              id="email"
              type="email"
              placeholder="E-Mail"
            />
          </div>
          <div className="col-span-5 lg:col-span-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Telefono"
            ></label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 
              leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde 
              focus:border-transparent lg:py-1"
              id="telefono"
              type="tel"
              placeholder="Telefono"
            />
          </div>
          <div className="grid justify-items-center col-span-5 pt-6 md:justify-items-start">
            DATOS DE LA CARGA
          </div>
          <div className="col-span-5 lg:col-span-2 md:justify-items-auto lg:mr-2">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Ciudad1"
            ></label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 
            mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde 
            focus:border-transparent lg:py-1"
              id="ciudad1"
              type="text"
              placeholder="Origen"
            />
          </div>
          <div className="col-span-5 lg:col-span-2">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Ciudad2"
            ></label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 
            mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde 
            focus:border-transparent lg:py-1"
              id="ciudad2"
              type="text"
              placeholder="Destino"
            />
          </div>
          <div className="col-span-5">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Peso"
            ></label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 
              leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde 
              focus:border-transparent lg:py-1"
              id="peso"
              type="text"
              placeholder="Peso (Kg)"
            />
          </div>
          <div className="col-span-5">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="dimencion"
            ></label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 
              leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde 
              focus:border-transparent lg:py-1"
              id="dimencion"
              type="text"
              placeholder="Dimenciones (Largo x Ancho x Alto)"
            />
          </div>
          <div className="col-span-5">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="comentarios"
            ></label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde focus:border-transparent"
              id="message"
              type="textarea"
              rows="3"
              placeholder="Comentarios Adicionales"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cotizacion;
