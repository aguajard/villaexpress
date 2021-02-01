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
      <div className="">
        <div className="grid justify-items-center">
          <img src={auto} alt="Peugeot" className="w-72 pt-8"></img>
        </div>
      </div>
      <div className="pt-7">
        <form className="grid grid-cols-3">
          <div className="grid justify-items-center col-span-3">
            DATOS DE CONTACTO
          </div>
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="first-name"
          ></label>
          <input
            className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde focus:border-transparent"
            id="Name"
            type="text"
            placeholder="Nombre Completo"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="EMail"
          ></label>
          <input
            className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde focus:border-transparent"
            id="email"
            type="email"
            placeholder="E-Mail"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Telefono"
          ></label>
          <input
            className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde focus:border-transparent"
            id="telefono"
            type="tel"
            placeholder="Telefono"
          />
          <div className="grid justify-items-center col-span-3 pt-6">
            DATOS DE LA CARGA
          </div>
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Ciudad1"
          ></label>
          <input
            className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde focus:border-transparent"
            id="ciudad1"
            type="text"
            placeholder="Ciudad de origen"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Ciudad2"
          ></label>
          <input
            className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde focus:border-transparent"
            id="ciudad2"
            type="text"
            placeholder="Ciudad de destino"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Peso"
          ></label>
          <input
            className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde focus:border-transparent"
            id="peso"
            type="text"
            placeholder="Peso (Kg)"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="dimencion"
          ></label>
          <input
            className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde focus:border-transparent"
            id="dimencion"
            type="text"
            placeholder="Dimenciones (Largo x Ancho x Alto)"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="comentarios"
          ></label>
          <textarea
            className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-verde focus:border-transparent"
            id="message"
            type="textarea"
            rows="3"
            placeholder="Comentarios Adicionales"
          />
        </form>
      </div>
    </div>
  );
};

export default Cotizacion;
