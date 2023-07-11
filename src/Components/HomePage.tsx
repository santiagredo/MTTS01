import React from "react";
import { useNavigate } from "react-router-dom";

import { pageContext } from "../PageContext";

export function HomePage () {
    const context = React.useContext(pageContext);
    const navigate = useNavigate();

    
    React.useEffect(() => {
        if (!context.user.email || !context.user.username) {navigate("/")};

    }, [context.user]);

    return (
        <main className="w-full flex justify-center flex-col bg-black">
            <h1 className="w-11/12 my-6 mx-auto text-center text-3xl text-white font-bold">
                MTTS01
            </h1>

            <p className="w-11/12 my-6 mx-auto text-center text-white">
                You made it to the home page! 🥳🥳🥳 
            </p>
        </main>
    );
};