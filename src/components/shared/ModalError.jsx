import React, { useState } from "react";

function ModalError({ isOpenError, closeModalError }) {
  return (
    <>
      {isOpenError && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="relative bg-gray-900 rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={closeModalError}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center bg-white text-black">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 text-red-500 w-14 h-14 dark:text-red-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="red" />
                <path
                  fill="#fff"
                  d="M17.66 6.34a.984.984 0 0 0-1.32 0L12 10.68l-4.34-4.34a.984.984 0 1 0-1.32 1.48L10.68 12l-4.34 4.34a.984.984 0 1 0 1.48 1.32L12 13.32l4.34 4.34a.984.984 0 1 0 1.32-1.48L13.32 12l4.34-4.34a.984.984 0 0 0 0-1.32z"
                />
              </svg>

              <h3 className="mb-5 text-lg font-normal text-gray-500">
                No ha aceptado las politicas de privacidad
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                onClick={closeModalError}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalError;
