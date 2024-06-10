import React from "react";
import Grupimage from "../images/Group 30.svg";
import Button from "../Components/Button";

function WelcomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br md:ml-96">
        <div className="bg-white rounded-lg p-8 w-full max-w-lg flex flex-col items-center space-y-8 md:flex-row-reverse">
          <div className="flex flex-col items-center space-y-4 md:flex-row-reverse">
            <div className="flex items-center justify-center space-x-2 md:ml-8 md:w-96">
              <img className="md:w-96 md:h-[300px] md:ml-14" src={Grupimage} />
            </div>
            <div className="div1 w-96">
              <h1 className="text-2xl mt-8 font-bold text-gray-800 text-center md:font-semibold md:text-5xl">
                Hi, Welcome Back!
              </h1>
              <p className="text-gray-600 text-center md:mt-8">
                Hope you're doing fine.
              </p>

              <form className="w-full space-y-4 md:mt-3">
                <div>
                  <input
                    type="text"
                    placeholder="📞Phone Number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <Button text={"Sign In"} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
