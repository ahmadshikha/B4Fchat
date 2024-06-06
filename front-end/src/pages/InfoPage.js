import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import png from "../images/0px.png";

const InfoPage = () => {
  const [preview, setPreview] = useState(png);
  const navigate = useNavigate()

  const ToHome = (e) =>{
    e.preventDefault()
    navigate('/')
  }
  const onFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if(selectedFile){
      setPreview(URL.createObjectURL(selectedFile))
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img src={preview} alt="Profile" className="w-24 h-24 rounded-full" />

            <div class="relative">
              <label
                title="Click to upload"
                for="button2"
                class="cursor-pointer flex items-center gap-4 "
              >
                <div className="absolute bottom-0 right-0 bg-teal-500 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-1.5a2.25 2.25 0 113.182 3.182L8.25 20.25H4.5v-3.75L15.232 6.768z"
                    />
                  </svg>
                </div>
              </label>
              <input
                className=" hidden"
                hidden=""
                type="file"
                name="button2"
                id="button2"
                onChange={onFileChange}
              />
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus: ring-primary"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
              focus:ring-primary"
            />
          </div>

          <div className="relative">
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
               focus:ring-primary"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>City</option>
                <option>City 1</option>
                <option>City 2</option>
              </select>
            </div>
            <div className="relative">
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Area</option>
                <option>Area 1</option>
                <option>Area 2</option>
              </select>
            </div>
          </div>
          <Button text={"Sign In"} handleClick={ToHome}/>
        </form>
      </div>
    </div>
  );
};

export default InfoPage;
