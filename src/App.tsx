import React from 'react';
import { Header } from './Components/Header';
import { LoginPage } from './Components/LoginPage';
import { Logo } from './Components/Logo';
import Signup from './Components/Signup';
import PasswordRecovery from './Components/PasswordRecovery';

function App() {

  return (
    <React.Fragment>
      
      <Header/>
      <Logo/>
      <LoginPage/>
      <Signup/>
      <PasswordRecovery/>
    </React.Fragment>
  )
}

export default App
