import { useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import Chatbot from "../shared/Chatbot";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Compra() {
  const location = useLocation();
  const numero = new URLSearchParams(location.search).get("numero");
  const [paquete, setPaquete] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");

  useState(() => {
    if (numero === "1") {
      setPaquete({
        plan: "Plan básico",
        costo: "1,200",
        imagen: "/servicio1.jpeg",
      });
    } else if (numero === "2") {
      setPaquete({
        plan: "Plan estándar",
        costo: "2,500",
        imagen: "/servicio2.jpeg",
      });
    } else if (numero === "3") {
      setPaquete({
        plan: "Plan premium",
        costo: "5,000",
        imagen: "/servicio3.jpeg",
      });
    }
  }, [numero]);

  const countries = ["México", "Estados Unidos", "Reino Unido"];
  const [menu, setMenu] = useState(false);

  const changeText = (e) => {
    setMenu(false);
    setSelectedCountry(e.target.innerText);
  };

  return (
    <>
      <NavBar />
      <Chatbot />

      <div className="flex justify-center items-center">
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex justify-start flex-col items-start space-y-2">
              <Link to="/" className="transition-colors">
                <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                  <svg
                    className="fill-stroke"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.91681 7H11.0835"
                      stroke="currentColor"
                      strokeWidth="0.666667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.91681 7L5.25014 9.33333"
                      stroke="currentColor"
                      strokeWidth="0.666667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.91681 7.00002L5.25014 4.66669"
                      stroke="currentColor"
                      strokeWidth="0.666667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-sm leading-none">Volver</p>
                </button>
              </Link>

              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Compra
              </p>
            </div>

            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                <div className="flex flex-col justify-start items-start w-full space-y-4">
                  <p className="text-xl md:text-2xl leading-normal text-gray-800">
                    {paquete.plan}
                  </p>
                  <p className="text-base font-semibold leading-none text-gray-600">
                    ${paquete.costo}
                  </p>
                </div>
                <div className="w-1/3 h-auto rounded-lg">
                  <img
                    src={paquete.imagen}
                    alt="paquete"
                    className="mx-10 h-auto rounded-lg "
                    style={{
                      boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
              </div>

              <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                <div className="flex flex-row justify-center items-center mt-6">
                  <h2 className="flex flex-shrink-0 px-4  font-bold text-xl">
                    Paga con tarjeta
                  </h2>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <label className="mt-8 block text-sm font-semibold leading-6 text-gray-900">
                  Datos de la tarjeta
                </label>

                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6    border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      placeholder="0000 1234 6549 15151"
                    />
                  </div>
                  <div className="flex-row flex">
                    <input
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6    border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      placeholder="MM/YY"
                    />
                    <input
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6    border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      placeholder="CVC"
                    />
                  </div>
                </div>
                <label className="mt-8 block text-sm font-semibold leading-6 text-gray-900">
                  Nombre en la tarjeta
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6    border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      placeholder="Nombre en la tarjeta"
                    />
                  </div>
                </div>

                <label className="mt-8 block text-sm font-semibold leading-6 text-gray-900">
                  Region o país
                </label>

                <div className="mt-2 flex-col">
                  <div className="relative">
                    <button
                      onClick={() => setMenu(!menu)} // Verifica que esto esté correctamente configurado
                      className={
                        "transform  cursor-pointer absolute top-4 right-4 " +
                        (menu ? "rotate-180" : "")
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 5.75L8 10.25L12.5 5.75"
                        stroke="#27272A"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </button>

                    <svg
                      onClick={() => setMenu(!menu)}
                      className={
                        "transform  cursor-pointer absolute top-4 right-4 " +
                        (menu ? "rotate-180" : "")
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 5.75L8 10.25L12.5 5.75"
                        stroke="#27272A"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div
                      className={
                        "mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " +
                        (menu ? "block" : "hidden")
                      }
                    >
                      {countries.map((country) => (
                        <div
                          key={country}
                          className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                          onClick={changeText}
                        >
                          {country}
                        </div>
                      ))}
                    </div>
                  </div>
                  <input
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="País"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    onClick={() => setMenu(!menu)}
                    readOnly={true}
                  />

                  <input
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6    border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Codigo postal"
                  />
                </div>
                <label className="mt-8 block text-sm font-semibold leading-6 text-gray-900">
                  Código promocional
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6    border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      placeholder="Codigo promocional"
                    />
                  </div>
                </div>

                <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                  <div>
                    <p className="text-base leading-4">Paga ${paquete.costo}</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Compra;
