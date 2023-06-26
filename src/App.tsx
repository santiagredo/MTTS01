import React from 'react';
import { Header } from './Components/Header';
import { LoginPage } from './Components/LoginPage';
import { Logo } from './Components/Logo';
import Signup from './Components/Signup';
import PasswordRecovery from './Components/PasswordRecovery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Logo/>

      <BrowserRouter>
        <Routes>

          <Route path="/signup" element={<Signup/>}/>
          <Route path="/passwordRecovery" element={<PasswordRecovery/>}/>
          
          <Route path="*" element={<LoginPage/>}/>

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
