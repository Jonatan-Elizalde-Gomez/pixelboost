import React from "react";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import Chatbot from "../shared/Chatbot";

function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <Chatbot />
      <div className="flex flex-col items-center mt-10 sm:mt-20 lg:mt-40">
        <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-700 mb-2 order-3">
          <Typical
            steps={["", 1000, "conexiones.", 2000, "", 1000]}
            loop={Infinity}
            wrapper="p"
          />{" "}
        </div>
        <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mr-2 mb-2 order-2">
          Nosotros creamos
        </div>
      </div>

      <p className="text-center text-xl mt-5 sm:mt-10 lg:mt-20">
        En PixelBoost, nos especializamos en impulsar la visibilidad en el
        ámbito digital de empresas pequeñas y medianas
      </p>
      <p className="text-center text-xl">
        ¡Descubre nuestro increíble trabajo!
      </p>
      <div className="flex justify-center items-center mt-5 sm:mt-10 lg:mt-20">
        <Link to="/contactanos" className="transition-colors">
          <button className="rounded-full border border-blue-500 py-3 px-10 sm:py-4 sm:px-12 lg:py-5 lg:px-16 text-blue-500 hover:bg-blue-500 hover:text-white mt-5 sm:mt-10 lg:mt-16">
            Contáctanos
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-10 sm:mt-20 lg:mt-32 gap-5 sm:gap-10 pb-20">
        <img
          src="https://companieslogo.com/img/orig/U_BIG-1ad04207.png"
          alt="Imagen 1"
          className="h-8 sm:h-10 lg:h-12 mx-2"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/46/Logo_BMC_Software.png"
          alt="Imagen 2"
          className="h-8 sm:h-10 lg:h-12 mx-2"
        />
        <img
          src="https://logos-download.com/wp-content/uploads/2021/01/Coupa_Logo.png"
          alt="Imagen 3"
          className="h-8 sm:h-10 lg:h-12 mx-2"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
          alt="Imagen 4"
          className="h-8 sm:h-10 lg:h-12 mx-2"
        />
        <img
          src="https://myleanacademy.com/wp-content/uploads/2020/01/logo-ibm-png-ibm-logo-png-4464.png"
          alt="Imagen 5"
          className="h-8 sm:h-10 lg:h-12 mx-2"
        />
      </div>
      <section className="bg-[#f0f2f5] pt-10 sm:pt-20 lg:pt-32 pb-10 sm:pb-20 lg:pb-32">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            ¡Bienvenido a PixelBoost, tu aliado digital
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            para potenciar tu negocio!
          </h1>
          <p className="text-lg sm:text-xl mx-5 sm:mx-20 lg:mx-96 pb-5 sm:pb-10 lg:pb-20">
            En PixelBoost entendemos la importancia de la visibilidad en el
            mundo digital para empresas pequeñas y medianas como la tuya.
            Nuestro objetivo es brindarte soluciones integrales que te ayuden a
            alcanzar el éxito.
          </p>
        </div>
      </section>
      <section className="pt-10 sm:pt-20 lg:pt-32 pb-10 sm:pb-20 lg:pb-32">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            No tienes de qué preocuparte. Nosotros
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-20">
            tenemos todo cubierto.
          </h1>
          <div className="flex flex-col sm:flex-row text-center sm:text-left">
            <div className="w-full sm:w-1/2 pl-5 sm:pl-10 pr-5 sm:pr-10">
              <p className="text-blue-500 text-base sm:text-lg font-bold">
                01.
              </p>
              <p className="text-xl sm:text-2xl mb-5 sm:mb-10">
                Aumenta tu visibilidad en línea con la optimización de motores
                de búsqueda (SEO).
              </p>
              <p className="text-blue-500 text-base sm:text-lg font-bold">
                02.
              </p>
              <p className="text-xl sm:text-2xl mb-5 sm:mb-10">
                Atrae a tu audiencia objetivo con estrategias de marketing de
                contenidos.
              </p>
              <p className="text-blue-500 text-base sm:text-lg font-bold">
                03.
              </p>
              <p className="text-xl sm:text-2xl">
                Conecta con más clientes potenciales a través de la gestión de
                redes sociales.
              </p>
            </div>
            <div className="w-full sm:w-1/2 pr-5 sm:pr-10 pl-5 sm:pl-10 mt-5 sm:mt-0">
              <p className="text-blue-500 text-base sm:text-lg font-bold">
                04.
              </p>
              <p className="text-xl sm:text-2xl mb-5 sm:mb-10">
                Llega a tu público de manera rápida y rentable con publicidad en
                línea (PPC).
              </p>
              <p className="text-blue-500 text-base sm:text-lg font-bold">
                05.
              </p>
              <p className="text-xl sm:text-2xl mb-5 sm:mb-10">
                Crea sitios web atractivos y funcionales que se adaptan a todos
                los dispositivos.
              </p>
              <p className="text-blue-500 text-base sm:text-lg font-bold">
                06.
              </p>
              <p className="text-xl sm:text-2xl">
                Evalúa el rendimiento y mejora tus estrategias con análisis de
                datos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
