import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import Typical from "react-typical";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center items-center mt-60">
        <p className="text-5xl font-bold mr-2">Nosotros creamos</p>
        <div className="text-5xl font-bold text-blue-700">
          <Typical
            steps={["", 1000, "conexiones.", 2000, "", 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
      <p className="text-center text-xl mt-10">
        En PixelBoost, nos especializamos en impulsar la visibilidad en el
        ámbito digital de empresas pequeñas y medianas
      </p>
      <p className="text-center text-xl">
        ¡Descubre nuestro increíble trabajo!
      </p>
      <div className="flex justify-center items-center">
        <Link to="/contactanos" className=" transition-colors">
        <button className="rounded-full border border-blue-500 py-7 px-24 text-blue-500 hover:bg-blue-500 hover:text-white mt-10">
        Contáctanos
        </button>

        </Link>
          
      </div>
      <div className="flex justify-center mt-20 gap-10 pb-40">
        <img
          src="https://companieslogo.com/img/orig/U_BIG-1ad04207.png"
          alt="Imagen 1"
          className="h-10 mx-2"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/46/Logo_BMC_Software.png"
          alt="Imagen 2"
          className="h-10 mx-2"
        />
        <img
          src="https://logos-download.com/wp-content/uploads/2021/01/Coupa_Logo.png"
          alt="Imagen 3"
          className="h-10 mx-2"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
          alt="Imagen 4"
          className="h-10 mx-2"
        />
        <img
          src="https://myleanacademy.com/wp-content/uploads/2020/01/logo-ibm-png-ibm-logo-png-4464.png"
          alt="Imagen 5"
          className="h-10 mx-2"
        />
      </div>
      <section className="bg-[#f0f2f5] pt-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            ¡Bienvenido a PixelBoost, tu aliado digital
          </h1>
          <h1 className="text-5xl font-bold mb-4 mb-10">
            para potenciar tu negocio!
          </h1>
          <p className="text-xl mx-96 pb-20">
            En PixelBoost entendemos la importancia de la visibilidad en el
            mundo digital para empresas pequeñas y medianas como la tuya.
            Nuestro objetivo es brindarte soluciones integrales que te ayuden a
            alcanzar el éxito.
          </p>
        </div>
      </section>
      <section className="pt-20 pb-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            No tienes de que preocuparte. Nosotros
          </h1>
          <h1 className="text-5xl font-bold mb-4 mb-20">
            tenemos todo cubierto.
          </h1>
          <div className="flex justify-center text-left">
            <div className="w-1/2 pl-40 pr-10 ">
              <p className="text-blue-500 text-sm font-bold text-lg">01.</p>
              <p className="text-2xl mb-10">
                Aumenta tu visibilidad en línea con la optimización de motores
                de búsqueda (SEO).
              </p>
              <p className="text-blue-500 text-sm font-bold text-lg">02.</p>

              <p className="text-2xl mb-10">
                Atrae a tu audiencia objetivo con estrategias de marketing de
                contenidos.
              </p>
              <p className="text-blue-500 text-sm font-bold text-lg">03.</p>

              <p className="text-2xl">
                Conecta con más clientes potenciales a través de la gestión de
                redes sociales.
              </p>
            </div>
            <div className="w-1/2 pr-40 pl-10">
              <p className="text-blue-500 text-sm font-bold text-lg">04.</p>
              <p className="text-2xl mb-10">
                Llega a tu público de manera rápida y rentable con publicidad en
                línea (PPC).
              </p>
              <p className="text-blue-500 text-sm font-bold text-lg">05.</p>

              <p className="text-2xl mb-10">
                Crea sitios web atractivos y funcionales que se adaptan a todos
                los dispositivos.
              </p>
              <p className="text-blue-500 text-sm font-bold text-lg">06.</p>

              <p className="text-2xl">
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
