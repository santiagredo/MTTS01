import React, { useState } from 'react';

const eye = new URL("../../public/eye.svg", import.meta.url).href;

const VerifyCode = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="w-full flex justify-center flex-col h-screen bg-black">
        <div className='max-w-sm mx-auto'>
            
            <div className='flex justify-center flex-col w-200 mx-auto mb-4'>
                <label className="text-white">Enter your verification pascode</label>
                 <div className='flex'>
                  <input
                    type={showPassword ? 'text' : 'password'}

                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Code"
                    maxLength={6}
                    className="w-30 rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
                  />
                  
                   <figure >
                    <button onClick={togglePasswordVisibility} className=" w-10 h-30" >        
                      <img src={eye} />
                    </button>
                  </figure>                  
                 </div>
            </div>
            <button 
                type="submit"  
                className="bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-s transform hover:scale-105">
                    SEND
            </button>       
   </div>
    </main>
  );
};

export default VerifyCode;
