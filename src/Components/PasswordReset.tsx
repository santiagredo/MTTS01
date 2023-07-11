import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { usersDatabase, defaultUser } from "../database";
import { pageContext } from "../PageContext";

export function PasswordReset() {
    const context = React.useContext(pageContext);
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = React.useState<string>("");
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    };
    
    const handlePasswordChangeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const index = usersDatabase.findIndex(ele => ele.email === context.resetCodeExists[1].email);

        if (index !== -1) {
            usersDatabase[index].password = newPassword;
            context.setResetCodeExists([0, defaultUser]);
            alert("Password successfully changed");
            navigate("/");
        } else {
            alert("Error processing your request, try again");
        };
    };

    return (
        <main className="w-full flex justify-center flex-col bg-black">
            <h2 className="w-11/12 my-6 mx-auto text-center text-3xl text-white font-bold">
                Reset password
            </h2>

            <form onSubmit={handlePasswordChangeSubmit}>
                <div className="max-w-sm mx-auto">
                    <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
                        <label className="text-white">
                            Enter your new password
                        </label>

                        <input
                            onChange={handlePasswordChange}
                            type="password"
                            placeholder="Type your new password"
                            className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
                        />
                    </div>

                    <div className="flex justify-center flex-col w-11/12 mx-auto my-6">
                        <button
                            type="submit"
                            className="bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-s transform hover:scale-105">
                            Submit
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
}
