import React from "react";
import { ResetCodeModel, UserModel, defaultUser } from "./database";

interface ContextModel {
    user: UserModel,
    setUser: React.Dispatch<React.SetStateAction<UserModel>>;
    resetCodeExists: ResetCodeModel,
    setResetCodeExists: React.Dispatch<React.SetStateAction<ResetCodeModel>>
};

export const pageContext = React.createContext<ContextModel>({
    user: defaultUser,
    setUser: () => {},
    resetCodeExists: [-1, defaultUser],
    setResetCodeExists: () => {}
});

interface ContextProps {
    children: JSX.Element | React.ReactNode;
};

export function PageContextProvider ({ children }: ContextProps) {
    const [user, setUser] = React.useState<UserModel>(defaultUser);
    const [resetCodeExists, setResetCodeExists] = React.useState<ResetCodeModel>([-1, defaultUser]);

    return (
        <pageContext.Provider value={{
            user,
            setUser,
            resetCodeExists,
            setResetCodeExists
        }}
        >
            {children}
        </pageContext.Provider>
    );
};