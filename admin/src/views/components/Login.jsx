import React, { useState } from 'react'


const Login = ({
}) => {

    return (
    <div 
        className="flex h-[70vh] rounded overflow-hidden w-[90%] md:w-auto">
        <div 
            className="w-1/2 bg-teal-700 p-12 flex items-center justify-center hidden lg:flex">
            <div 
                className="flex items-center justify-center">
                <div 
                    className="bg-teal-600 p-12 rounded-lg shadow-lg">
                    <h2 
                        className="text-white text-3xl font-bold">Welcome Back!</h2>
                    <p 
                        className="text-teal-200 mt-4">Glad to see you again.</p>
                </div>
            </div>
        </div>

        <div 
            className="w-[100%] py-12 lg:w-1/2 bg-yellow-500 flex items-center justify-center">
            <div 
                className="bg-white px-10 py-12 rounded-lg shadow-lg w-3/4 max-w-sm">
                <h3 
                    className="text-gray-700 text-xl font-bold text-center mb-4">
                        HAVE ACCOUNT
                </h3>
                <form 
                    className="space-y-4">
                    <div>
                        <label 
                            className="sr-only">Email</label>
                        <input 
                            type="text" 
                                placeholder="Enter your email" 
                                className="w-full p-3 border border-gray-300 rounded-lg"/>
                    </div>
                    <div>
                        <label 
                            className="sr-only">Password</label>
                        <input  
                            type="password" placeholder="Enter your password" className="w-full p-3 border border-gray-300 rounded-lg"/>
                    </div>
                    <button on
                        className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold">
                    SIGN IN
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login
