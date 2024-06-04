export default function Conv() {
    function Row() {
        return (
            <>
                <div className="flex flex-row justify-around my-2">
                    <button className="bg-white w-32 h-12 rounded-lg shadow-2xl">
                        <p className="font-cairo">Saved Message</p>
                    </button>
                    <button className="bg-white w-32 h-12 rounded-lg shadow-2xl">
                        <p className="font-cairo">Saved Message</p>
                    </button>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="bg-slate-400 flex w-full flex-col  justify-center items-center">
                <div className=" bg-white w-80 h-full rounded-xl flex flex-col  justify-between shadow-2xl">
                    <div className="flex flex-row items-center justify-between ">
                        <div className="flex flex-row items-center justify-around">
                            <div className="rounded-full w-20 h-20 ml-2 mt-2 bg-white flex justify-center items-center shadow-2xl">
                                <img className="w-16 h-8   " src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png" alt="ima" />
                            </div>
                            <div className="ml-2">
                                <h3 className=" font-bold font-cairo">Mhd Shaar</h3>
                                <p className="text-sm">+963 982 305 060</p>
                            </div>
                        </div>
                        <button className="mr-2"><FiEdit /></button>
                    </div>
                    <h3 className=" font-bold font-cairo ml-6">Basics</h3>
                    <div className="flex flex-col justify-center items-center">
                        <button className="bg-white w-11/12 h-12 rounded-lg my-2 shadow-2xl">
                            <p className="font-cairo">Saved Message</p>
                        </button>
                        <button className="bg-white w-11/12 h-12 rounded-lg shadow-2xl">
                            <p>Saved Message</p>
                        </button>
                    </div>
                    <h3 className=" font-bold font-cairo ml-6">Setting</h3>
                    <Row />
                    <Row />
                    <Row />
                </div>
            </div>
        </>
    )
}