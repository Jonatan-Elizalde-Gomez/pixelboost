import React, { useState } from "react";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import Typical from "react-typical";
import "../../styles/Contact.css";
import { Switch } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Modal from "../shared/Modal";
import ModalError from "../shared/ModalError";
import Chatbot from "../shared/Chatbot";

function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalError = () => {
    setIsOpenError(true);
  };

  const closeModalError = () => {
    setIsOpenError(false);
  };
  const handleInputChange = () => {
    const formElements = document.querySelectorAll("input, textarea, select");
    let isFormComplete = true;

    formElements.forEach((element) => {
      if (element.value === "") {
        isFormComplete = false;
      }
    });

    setFormComplete(isFormComplete);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!agreed) {
      openModalError();
      return;
    }

    openModal();
  };

  return (
    <>
      <NavBar />

      <Modal isOpen={isOpen} closeModal={closeModal} />
      <ModalError isOpenError={isOpenError} closeModalError={closeModalError} />

      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Contactanos
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Estamos aquí para ayudarte a brillar en el mundo digital.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl ">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Primer nombre
                    </label>
                    <div className="mt-2.5">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Apellidos
                    </label>
                    <div className="mt-2.5">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Compañía
                    </label>
                    <div className="mt-2.5">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        onChange={handleInputChange}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Numero de telefono
                    </label>
                    <div className="relative mt-2.5">
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="country" className="sr-only">
                          País
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option>MX</option>
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                      </div>
                      <input
                        onChange={handleInputChange}
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="pl-28 block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Mensaje
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        onChange={handleInputChange}
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                          agreed ? "bg-indigo-600" : "bg-gray-200",
                          "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        )}
                      >
                        <span className="sr-only">Aceptar politicas</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreed ? "translate-x-3.5" : "translate-x-0",
                            "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                          )}
                        />
                      </Switch>
                    </div>
                    <Switch.Label className="text-sm leading-6 text-gray-600">
                      Seleccionando esto estás aceptando nuestras{" "}
                      <a className="font-semibold text-indigo-600">
                        <Link to="/contactanos" className=" transition-colors">
                          politicas y privacidad
                        </Link>
                      </a>
                      .
                    </Switch.Label>
                  </Switch.Group>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    disabled={!formComplete}
                    className={classNames(
                      "block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                      {
                        "bg-indigo-600 text-white hover:bg-indigo-500":
                          formComplete,
                        "bg-gray-300 text-gray-400 cursor-not-allowed":
                          !formComplete,
                      }
                    )}
                  >
                    Hablemos
                  </button>
                </div>
              </form>
            </div>

            <Chatbot />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
