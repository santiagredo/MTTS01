import React from 'react';
import { Header } from './Components/Header';
import { LoginPage } from './Components/LoginPage';
import { Logo } from './Components/Logo';

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Logo/>
      <LoginPage/>
    </React.Fragment>
  )
}

export default App
