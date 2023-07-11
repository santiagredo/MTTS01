import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { usersDatabase, resetCodes } from "../database";

const PasswordRecovery = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userExists = usersDatabase.find(ele => ele.email === email);
        
        if (userExists) {
            const randomCode = generateRandomNumber();
            resetCodes.push([randomCode, userExists]);
            alert(`Your reset code is: ${randomCode}`);
            navigate("/verifyCode");
        } else {
            alert("User doesn't exist");
        };
    };
    
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 9000) + 99999;
        return randomNumber;
    };

    return (
        <main className="w-full flex justify-center flex-col bg-black">
            <h2 className="text-white text-center m-4">
                Password recovery
            </h2>
            
            <form onSubmit={handleFormSubmit}>
                <div className="max-w-sm mx-auto">
                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <label htmlFor="email" className="text-white">
                            Enter your email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email"
                            className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
                        />

                    </div>

                    <div className="flex justify-center flex-col w-11/12 mx-auto my-6">
                        <button
                            type="submit"
                            className="bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-s transform hover:scale-105">
                            Send
                        </button>
                    </div>
                </div>
            </form>

            <Link
                to="/"
                className="text-white mx-auto my-1 hover:text-green-500">
                Return to Login page
            </Link>
        </main>
    );
};

export default PasswordRecovery;
