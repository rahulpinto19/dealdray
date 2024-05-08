import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleusername = (e) => {
    setusername(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const id = username;
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        id,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        alert("successfull logged in");
        localStorage.setItem("admintoken", response.data.authtoken);
      } else {
        alert("invalid credentials");
      }
    } catch (err) {
      alert("internal issue");
    }
  };
  return (
    <div className="fixed">
      <div className=" ">
        <p className=" relative text-5xl   left-[50%]  ">
          DealsDray Admin page
        </p>
      </div>
      <div>
        <div>
          <section className="relative left-[50%]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                    <div>
                      <label
                        htmlFor="id"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="id"
                        autoComplete="username email"
                        onChange={handleusername}
                        id="id"
                        required={true}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handlepassword}
                        autoComplete="new-password"
                        required
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-blue-grey"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Log in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
