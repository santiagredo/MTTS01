import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header";
import { Logo } from "./Components/Logo";
import { LoginPage } from "./Components/LoginPage";
import Signup from "./Components/Signup";
import PasswordRecovery from "./Components/PasswordRecovery";
import VerifyCode from "./Components/VerifyCode";
import { PasswordReset } from "./Components/PasswordReset";
import { HomePage } from "./Components/HomePage";
import { PageContextProvider } from "./PageContext";

function App() {
    return (
        <PageContextProvider>
            <BrowserRouter>

                <React.Fragment>
                    <Header />
                    <Logo />

                    <Routes>
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/passwordRecovery" element={<PasswordRecovery />}/>
                        <Route path="/verifyCode" element={<VerifyCode/>}/>
                        <Route path="/passwordReset" element={<PasswordReset/>}/>
                        <Route path="/homepage" element={<HomePage/>}/>
                        <Route path="*" element={<LoginPage />}/>
                    </Routes>
                </React.Fragment>

            </BrowserRouter>
        </PageContextProvider>
    );
}

export default App;
