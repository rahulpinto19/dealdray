import React from "react";
import Emplist from "./Emplist";
import Addemployee from "./Addemployee";
import Editemp from "./Editemp";
const Employee = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onSubmit={<Emplist />}
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Employee list
                </button>
              </li>
              <li>
                <button
                  onClick={<Editemp />}
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Edit employee
                </button>
              </li>
              <li>
                <button
                  onSubmit={<Addemployee />}
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Add employee
                </button>
              </li>
              <li>
                {/* <img
                  class="w-10 h-10 rounded-full"
                  src="data:image/png;base64,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"
                  alt="Rounded avatar"
                /> */}
                <h1 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Rahul
                </h1>
              </li>
              <button class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onSubmit={console.log("object")}>
                logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bottom-1">
        <h1 className="text-7xl ">Welcome to the Admin panel</h1>
      </div>
    </div>
  );
};

export default Employee;
