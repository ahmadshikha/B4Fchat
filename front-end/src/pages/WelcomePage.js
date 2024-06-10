import React, { useState } from "react";
import image from "../images/Group 30.svg";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../rtk/slices/userSlice";
import Dialog from "../Components/Dialog";


function WelcomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  async function handleClick(e) {
    e.preventDefault()
    const res = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Parse-REST-API-Key": "restAPIKey",
        "X-Parse-Application-Id": "appId",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if(res.ok){
      
      const data = await res.json()
      dispatch(login(data.sessionToken))
    }
    else{
      handleOpen()
    }
  }

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Dialog isLogin={true} isOpen={isOpen} onClose={handleClose}>
        <p>Incorrect username and password</p>
      </Dialog>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br md:ml-96">
        <div className="bg-white rounded-lg p-8 w-full max-w-lg flex flex-col items-center space-y-8 md:flex-row-reverse">
          <div className="flex flex-col items-center space-y-4 md:flex-row-reverse">
            <div className="flex items-center justify-center space-x-2 md:ml-8 md:w-96">
              <img className="md:w-[30rem] md:h-[300px] md:ml-14" src={image} />
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <Button text={"Sign In"} handleClick={handleClick}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
