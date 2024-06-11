import React, { useState } from "react";
import Button from "../Components/Button";
import png from "../images/0px.png";
import './arrowSelect.css'
import Dialog from "../Components/Dialog";
import { login } from "../rtk/slices/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const InfoPage = () => {
  const [inputType, setInputType] = useState('text'); 
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [date,setDate] = useState('')
  const [country,setCountry] = useState('Area')
  const [email,setEmail] = useState('')
  const [city,setCity] = useState('City')
  const [error,setError]= useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleFocus = () => {
    setInputType('date');
  };

  const handleBlur = () => {
    setInputType('text');
  };

  const [preview, setPreview] = useState(png);
  const [isOpen, setIsOpen] = useState(false);

   const ToHome = async (e) =>{

    e.preventDefault()
    const res = await fetch('http://localhost:1337/api/classes/_User',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'X-Parse-REST-API-Key': 'restAPIKey',
      'X-Parse-Application-Id': 'appId',

      },
      body:JSON.stringify(
       { username,
        password,
        email,
        countryName:country,
        cityName:city,
        birthdate:date
      }

      )
    })
    if(res.ok){
      
      const data = await res.json()
      dispatch(login({token:data.sessionToken,name:username,id:data.objectId}))
      navigate('/')
    }
    else{
      const data = await res.json()
      setError(data.error)

      handleOpen()
    }
  }
  const onFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if(selectedFile){
      setPreview(URL.createObjectURL(selectedFile))
    }
  }
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <Dialog isLogin={false} isOpen={isOpen} onClose={handleClose}>
        <p>{error}</p>
      </Dialog>
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
            value={username}
            onChange={e=>setUsername(e.target.value)}
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 my-1 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus: ring-primary"
            />
          </div>
          <div>
            <input
            value={password}
            onChange={e=>setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 my-1 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus: ring-primary"
            />
          </div>
          <div>
            <input
            value={email}
            onChange={e=>setEmail(e.target.value)}
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 my-1 border border-gray rounded-2xl focus:outline-none focus:ring-2 
              focus:ring-primary"
            />
          </div>

          <div className="relative">
          <input
          value={date}
          onChange={e=>setDate(e.target.value)}
    type={inputType} 
    placeholder="Birth Of Date"
    onFocus={ handleFocus} 
    onBlur={handleBlur} 
    className="w-full px-4 py-3 my-1 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary text-gray"
  />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative select" >
            <select value={city}
            onChange={e=>setCity(e.target.value)} className=" select w-full px-4 py-2 my-1 border appearance-none border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary text-gray">
                <option>City</option>
                <option>Area 1</option>
                <option>Area 2</option>
              </select>
            </div>
            <div className="relative select">
              <select value={country}
            onChange={e=>setCountry(e.target.value)} className="w-full px-4 py-2 my-1 border appearance-none border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary text-gray">
                <option>Area</option>
                <option>Area 1</option>
                <option>Area 2</option>
              </select>
            </div>
          </div>
          <Button text={"Sign In"} handleClick={ToHome}/>
        </form>
        <div className="mt-2">

              <span>already have an account </span><Link className="text-primary" to='/'>login</Link>
              </div>
      </div>
    </div>
  );
};




export default InfoPage;
