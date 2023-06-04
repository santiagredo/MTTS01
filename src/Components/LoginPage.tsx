import React from "react";



export function LoginPage () {

    return (
        <main className="w-full flex justify-center flex-col bg-black">
            <form className="w-full flex justify-center flex-col">
                <input type="email" className="w-11/12 mx-auto"/>
                <input type="password" className="w-11/12 mx-auto"/>

                <button type="submit" className="bg-green-500 text-white w-1/5 mx-auto rounded-xl">Log in</button>
            </form>

            <a href="Sign up" className="text-white mx-auto">Sign up</a>
            <a href="Sign up" className="text-white mx-auto">Reset password</a>
        </main>
    );
};