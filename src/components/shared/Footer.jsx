import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="/public/Logo.png"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                PixelBoost
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Recursos
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    PixelBoost
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Siguenos
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100093577273637"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pixelboost.ti/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/boost_pixel"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/pixel-boost-25927527b/"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Politicas de privacidad
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Terminos y condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center with no response (max_response_length=2048) sm:flex sm:items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2023 PixelBoost. Todos los derechos reservados.
          </p>
          <div className="mt-4 sm:mt-0">
            <a
              href="/"
              className="text-gray-600 dark:text-gray-400 hover:underline mx-2"
            >
              Términos de uso
            </a>
            <span className="text-gray-600 dark:text-gray-400 mx-2">|</span>
            <a
              href="/"
              className="text-gray-600 dark:text-gray-400 hover:underline mx-2"
            >
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
