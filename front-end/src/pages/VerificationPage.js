import React from 'react'

function VerificationPage() {
  return (
    <div>
          <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br ml-10"
    >
      <div
        className="bg-white rounded-lg p-8 w-full max-w-lg flex flex-col items-center space-y-8"
      >
        <div className="flex flex-col items-center space-y-4 md:flex-row-reverse">
          <div
            className="flex items-center justify-center space-x-2 md:ml-8 md:w-96"
          >
            <img className="md:w-96 md:ml-14" src="./images/Group 30.svg" />
          </div>

          <div className="div1">
            <h1 className="text-2xl mt-5 font-bold text-gray-800 text-center">
              Verify Code
            </h1>
            <p className="text-gray-600 text-center">
              Enter the code we just sent you on your registered
              <span className="text-teal-500">kfvtgewXXXX90</span>
            </p>
            <form className="w-full space-y-4">
              <div className="flex justify-between ">
                <input
                  type="text"
                  maxlength="1"
                  className="w-12 h-12 m-1 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="text"
                  maxlength="1"
                  className="w-12 h-12  m-1text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="text"
                  maxlength="1"
                  className="w-12 h-12 m-1 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="text"
                  maxlength="1"
                  className="w-12 h-12 m-1 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="text"
                  maxlength="1"
                  className="w-12 h-12  m-1text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="text"
                  maxlength="1"
                  className="w-12 h-12  m-1text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Verify
              </button>
            </form>
            <p className="text-gray-600">
              Didn't get the code?
              <span className="text-teal-500 cursor-pointer">Resend</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default VerificationPage
