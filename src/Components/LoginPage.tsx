import React from "react";

import { Link, useNavigate } from "react-router-dom"

export function LoginPage () {

    const navigate = useNavigate() 

    return (
        <main className="w-full flex justify-center flex-col h-screen bg-black">
            <form>
                <div className="max-w-sm mx-auto">
                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <label className="text-white">Email address or username</label>
                        <input type="text" placeholder="Email address or username" className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"/>
                    </div>

                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <label className="text-white">Password</label>
                        <input type="password" placeholder="Password" className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"/>
                    </div>

                    <div className="flex justify-center flex-col w-11/12 mx-auto my-6">
                        <button type="submit" className="bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-
                        s transform hover:scale-105">Log in</button>
                    </div>
                </div>
            </form>

            <Link to="/signup" className="text-white mx-auto my-1 hover:text-green-500">Sign up</Link>
            <a href="Sign up" className="text-white mx-auto my-1 hover:text-green-500">Forgot your password?</a>
        </main>
    );
}