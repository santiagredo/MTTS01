import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { pageContext } from "../PageContext";
import { usersDatabase } from "../database";

interface FormUser {
    alias: string;
    password: string;
}

export function LoginPage() {
    const context = React.useContext(pageContext);
    const navigate = useNavigate();

    const [formUser, setFormUser] = React.useState<FormUser>({
        alias: "",
        password: "",
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormUser({
            ...formUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userExists = usersDatabase.find(
            (ele) =>
                ele.email === formUser.alias || ele.username === formUser.alias
        );

        if (userExists) {
            if (userExists.password === formUser.password) {
                context.setUser(userExists);
                navigate("/homepage");
            } else {
                alert("User exists, password is NOT correct");
            }
        } else {
            alert("User doesn't exist");
        }
    };

    React.useEffect(() => {
        if (context.user.email || context.user.username) {
            navigate("/homepage");
        }
    }, []);

    return (
        <main className="w-full flex justify-center flex-col  bg-black">
            <form onSubmit={handleSubmit}>
                <div className="max-w-sm mx-auto">
                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <label className="text-white">
                            Email address or username
                        </label>
                        <input
                            type="text"
                            name="alias"
                            onChange={handleInputChange}
                            placeholder="Email address or username"
                            className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
                        />
                    </div>

                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <label className="text-white">Password</label>
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
                            className="bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-
                        s transform hover:scale-105">
                            Log in
                        </button>
                    </div>
                </div>
            </form>

            <Link
                to="/signup"
                className="text-white mx-auto my-1 hover:text-green-500">
                Sign up
            </Link>
            <Link
                to="/passwordRecovery"
                className="text-white mx-auto my-1 hover:text-green-500">
                Forgot your password?
            </Link>
        </main>
    );
}
