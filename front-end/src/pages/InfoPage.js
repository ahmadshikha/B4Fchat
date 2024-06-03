import React from 'react';
import Button from '../Components/Button';
import png from '../images/0px.png'

const InfoPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <img
                            src={png}
                            alt="Profile"
                            className="w-24 h-24 rounded-full"
                        />
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
                    </div>
                </div>
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 7v9a1 1 0 001 1h10a1 1 0 001-1V7H4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <select
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <option>City</option>
                                <option>City 1</option>
                                <option>City 2</option>
                            </select>
                        </div>
                        <div className="relative">
                            <select
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <option>Area</option>
                                <option>Area 1</option>
                                <option>Area 2</option>
                            </select>
                        </div>
                    </div>
                    <Button text={'Sign In'}/>
                </form>
            </div>
        </div>
    );
};

export default InfoPage;
