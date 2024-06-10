import { useNavigate } from "react-router-dom"

function Dialog({isLogin, isOpen, onClose, children }) {
  const navigate = useNavigate()
  return (
    <div
      className={`z-10 fixed top-0 left-0 w-full h-full bg-gray-900/50  ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div
        className=" relative max-h-full w-full max-w-2xl mx-auto p-4 md:p-6 lg:p-8"
      >
        <div
          className="bg-[#eee]  rounded-lg shadow-md"
        >
          <div
            className="flex items-start justify-center p-4 border-b "
          >
            <h3 className="text-xl font-semibold text-gray-900 ">
              {children}
            </h3>
          </div>
          <div className="flex justify-center gap-2">
            <button
              className="bg-red-500 text-white p-2 m-2 rounded-md hover:bg-red-700 text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300"
              onClick={onClose}
            >
              try again
            </button>

          {isLogin ? <button onClick={()=>navigate('/info')} className="bg-green-500 text-white p-2 m-2 rounded-md hover:bg-green-700">
            Register
          </button> : null}
          </div>
        </div>

      </div>
    </div>
  );
}


export default Dialog