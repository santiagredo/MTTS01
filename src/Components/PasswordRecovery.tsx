import React, { useState } from 'react';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(`Se enviará un correo de recuperación de contraseña a: ${email}`);
  };

  return (
    <main className="w-full flex justify-center flex-col h-screen bg-black">
      <div className='max-w-sm mx-auto'>
        <h2>Password recovery</h2>
        <form onSubmit={handleFormSubmit}>
          <div className='flex justify-center flex-col w-11/12 mx-auto mb-4'>
          <label htmlFor="email" className='text-white'>Enter your mail</label>
          <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange}
          placeholder="email"
          className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2" />
          </div>
          <div className="flex justify-center flex-col w-11/12 mx-auto my-6">
                  <button type="submit" className="bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-
                  s transform hover:scale-105">Send</button>
              </div>
          
        </form>
      </div>
    </main>
      
  );
};

export default PasswordRecovery;
