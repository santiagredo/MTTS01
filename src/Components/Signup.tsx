import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { usersDatabase, UserModel } from "../database";
import { pageContext } from "../PageContext";


function SignupPage () {
    const context = React.useContext(pageContext);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState<UserModel>({
        username: "",
        email: "",
        password: "",
    });

    //CAMBIO DE ENTRADA
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    // ENVIAR
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newUser: UserModel = {
            email: formValues.email,
            username: formValues.username,
            password: formValues.password
        };

        console.log(newUser);
        usersDatabase.push(newUser);
        context.setUser(newUser);
    };

    React.useEffect(() => {
        if (context.user.email || context.user.username) {navigate("/homepage")};
    }, [context.user]);

    return (
        <main className="w-full flex justify-center flex-col bg-black">
            <h2 className="text-white text-center">
                Create an account:
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="max-w-sm mx-auto">
                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <label htmlFor="name" className="text-white">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="username"
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
                        />
                    </div>

                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <label htmlFor="email" className="text-white">
                            Email:
                        </label>

                        <input
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
                        />
                    </div>

                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <label htmlFor="password" className="text-white">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleInputChange}
                            placeholder="Password"
                            className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
                        />
                    </div>

                    <div className="flex justify-center flex-col w-11/12 mx-auto my-6">
                        <button
                            type="submit"
                            className="bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-s transform hover:scale-105">
                            Sign Up
                        </button>
                    </div>

                </div>
            </form>

            <Link to="/passwordRecovery" className="text-white mx-auto my-1 hover:text-green-500">Forgot your password?</Link>
        </main>
    );
};

export default SignupPage;
