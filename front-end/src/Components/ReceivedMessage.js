import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { useState,useRef,useEffect } from "react";
function ReceivedMessage({text,time}) {
  const [overlay,setOverlay] = useState(false)
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setOverlay(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [overlayRef]);
  return (
    <div className="relative group md:max-w-[50%] self-start my-2 ml-2 flex items-center mr-[10%] ">
      <div  className="max-w-full  py-1 px-4 rounded-r-2xl rounded-t-2xl text-black-200 mr-2 bg-darkGray">
        <p className="pr-5 break-all">
          {
            text
          }{" "}
        </p>
        <div className="flex justify-end items-center">
          <p className="mr-1">{time}</p>
          <IoCheckmarkDoneOutline />
        </div>
      </div>
      <HiDotsHorizontal onClick={()=>setOverlay(true)} className="text-[#AEAEB2] absolute hidden -right-6 size-6 md:group-hover:block hover:cursor-pointer" />
      <div ref={overlayRef} className={`${overlay ? "block" : "hidden"} absolute -right-48 -bottom-10 z-10 rounded-xl bg-white`}>
        <div className='flex hover:rounded-xl pl-3 pr-24 hover:cursor-pointer py-4 hover:bg-slate-50'>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25H20.5C20.91 21.25 21.25 21.59 21.25 22C21.25 22.41 20.91 22.75 20.5 22.75Z"
              fill="black"
            />
            <path
              d="M18.9999 18.25C18.8099 18.25 18.6199 18.18 18.4699 18.03L4.46994 4.03C4.17994 3.74 4.17994 3.26 4.46994 2.97C4.75994 2.68 5.23994 2.68 5.52994 2.97L19.5299 16.97C19.8199 17.26 19.8199 17.74 19.5299 18.03C19.3799 18.18 19.1899 18.25 18.9999 18.25Z"
              fill="black"
            />
            <path
              d="M5 14.52C4.59 14.52 4.25 14.18 4.25 13.77V3.5C4.25 3.09 4.59 2.75 5 2.75H15.27C15.68 2.75 16.02 3.09 16.02 3.5C16.02 3.91 15.68 4.25 15.27 4.25H5.75V13.77C5.75 14.18 5.41 14.52 5 14.52Z"
              fill="black"
            />
          </svg>
          <h3 className="mx-2">Forward</h3>
        </div>
        <div className='flex pl-3 pr-24 hover:cursor-pointer py-4 hover:bg-slate-50'>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6601 22.67C17.1301 22.67 16.4501 22.5 15.6001 22L12.6101 20.23C12.3001 20.05 11.7001 20.05 11.4001 20.23L8.40012 22C6.63012 23.05 5.59012 22.63 5.12012 22.29C4.66012 21.95 3.94012 21.08 4.41012 19.08L5.12012 16.01C5.20012 15.69 5.04012 15.14 4.80012 14.9L2.32012 12.42C1.08012 11.18 1.18012 10.12 1.35012 9.60001C1.52012 9.08001 2.06012 8.16001 3.78012 7.87001L6.97012 7.34001C7.27012 7.29001 7.70012 6.97001 7.83012 6.70001L9.60012 3.17001C10.4001 1.56001 11.4501 1.32001 12.0001 1.32001C12.5501 1.32001 13.6001 1.56001 14.4001 3.17001L16.1601 6.69001C16.3001 6.96001 16.7301 7.28001 17.0301 7.33001L20.2201 7.86001C21.9501 8.15001 22.4901 9.07001 22.6501 9.59001C22.8101 10.11 22.9101 11.17 21.6801 12.41L19.2001 14.9C18.9601 15.14 18.8101 15.68 18.8801 16.01L19.5901 19.08C20.0501 21.08 19.3401 21.95 18.8801 22.29C18.6301 22.47 18.2301 22.67 17.6601 22.67ZM12.0001 18.59C12.4901 18.59 12.9801 18.71 13.3701 18.94L16.3601 20.71C17.2301 21.23 17.7801 21.23 17.9901 21.08C18.2001 20.93 18.3501 20.4 18.1301 19.42L17.4201 16.35C17.2301 15.52 17.5401 14.45 18.1401 13.84L20.6201 11.36C21.1101 10.87 21.3301 10.39 21.2301 10.06C21.1201 9.73001 20.6601 9.46001 19.9801 9.35001L16.7901 8.82001C16.0201 8.69001 15.1801 8.07001 14.8301 7.37001L13.0701 3.85001C12.7501 3.21001 12.3501 2.83001 12.0001 2.83001C11.6501 2.83001 11.2501 3.21001 10.9401 3.85001L9.17012 7.37001C8.82012 8.07001 7.98012 8.69001 7.21012 8.82001L4.03012 9.35001C3.35012 9.46001 2.89012 9.73001 2.78012 10.06C2.67012 10.39 2.90012 10.88 3.39012 11.36L5.87012 13.84C6.47012 14.44 6.78012 15.52 6.59012 16.35L5.88012 19.42C5.65012 20.41 5.81012 20.93 6.02012 21.08C6.23012 21.23 6.77012 21.22 7.65012 20.71L10.6401 18.94C11.0201 18.71 11.5101 18.59 12.0001 18.59Z"
              fill="black"
            />
          </svg>
          <h3 className="mx-2">Pin</h3>
        </div>
      </div>
    </div>
  );
}

export default ReceivedMessage;
