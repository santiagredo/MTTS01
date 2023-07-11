import React from "react";
import { Link } from "react-router-dom";

import { pageContext } from "../PageContext";
import { defaultUser } from "../database";

const HeaderLogo = new URL ("../assets/Header Logo.PNG", import.meta.url).href

export function Header () {
    const context = React.useContext(pageContext);

    const [logoutModal, setLogoutModal] = React.useState<boolean>(false);

    const openLogout = () => {
        setLogoutModal(true);
    };

    const closeLogout = () => {
        setLogoutModal(false);
    };

    const closeSession = () => {
        context.setUser(defaultUser);
        setLogoutModal(false);
    };

    return (
        <header className="w-full flex justify-between items-center mx-auto md:mx-0 p-2 bg-black text-white">
            <Link to="/" className="flex justify-between items-center">
                <figure className="w-20">
                    <img src={HeaderLogo} className="w-full"/>
                </figure>
            </Link>

            {!logoutModal && context.user.email && (
                <a onClick={openLogout} className="text-white my-1 hover:text-green-500 hover:cursor-pointer">
                    Log out
                </a>
            )}

            {logoutModal && context.user.email && (
                <nav className="text-center">
                    <p>
                        Do you want to log out?
                    </p>

                    <div className="flex justify-between">
                        <button onClick={closeLogout} className="my-2 w-20 text-green-500 rounded-md transform hover:scale-105">
                            Cancel
                        </button>

                        <button onClick={closeSession} className="my-2 w-20 text-green-500 rounded-md transform hover:scale-105">
                            Log out
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
}