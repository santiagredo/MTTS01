import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { resetCodes, ResetCodeModel } from "../database";
import { pageContext } from "../PageContext";

const eye = new URL("../assets/eyeIcon.jpg", import.meta.url).href;

function VerifyCode () {
    const navigate = useNavigate();
    const context = React.useContext(pageContext);

    const [password, setPassword] = useState("");
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const storedResetCode: ResetCodeModel | undefined = resetCodes.find(ele => ele[0] === Number(password));

        if (storedResetCode) {
            context.setResetCodeExists(storedResetCode);
            navigate("/passwordReset")
        } else {
            alert("Code doesn't exist");
        };
    };

    return (
        <main className="w-full flex justify-center flex-col bg-black">
            <label className="text-white text-center">
                Enter your verification code
            </label>

            <form onSubmit={handleFormSubmit}>
                <div className="max-w-sm mx-auto">
                    <div className="flex justify-center w-11/12 mx-auto mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            onChange={handlePasswordChange}
                            placeholder="Code"
                            maxLength={6}
                            className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
                        />

                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className=" w-10 h-30 mx-2 text-white">
                                <figure>
                                    <img src={eye} />
                                </figure>
                        </button>
                    </div>
                    
                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <button
                            type="submit"
                            className="bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-s transform hover:scale-105">
                            Send
                        </button>
                    </div>
                </div>
            </form>

            <Link to="/" className="text-white mx-auto my-1 hover:text-green-500"> Return to Login page</Link>
        </main>
    );
};

export default VerifyCode;
