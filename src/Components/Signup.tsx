import React, { useState } from 'react';

interface SingupForm {
  name: string;
  email: string;
  password: string;
}

const Singup: React.FC = () => {
  const [formValues, setFormValues] = useState<SingupForm>({
    name: '',
    email: '',
    password: ''
  });

  //CAMBIO DE ENTRADA
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };
  // ENVIAR
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
       setFormValues({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <main className="w-full flex justify-center flex-col h-screen bg-black">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
        <label htmlFor="name" className="text-white">Name:</label>
        <input 
          type="text"
          id="name"
          name="name"          
          value={formValues.name}
          onChange={handleInputChange}
          placeholder="name"
          className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
         
        />
      </div>
      <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
        <label htmlFor="email" className="text-white">Email:</label>
        <input
          type="email"
          id="email"
          name="email"          
          value={formValues.email}
          onChange={handleInputChange}
          placeholder="emil"
          className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
        />
      </div>
      <div className="flex justify-center flex-col w-11/12 mx-auto mb-4">
        <label htmlFor="password" className="text-white">Password:</label>
        <input
          type="password"
          id="password"
          name="password"          
          value={formValues.password}
          onChange={handleInputChange}
          placeholder="pasword"
          className="w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2"
        />
      </div>
      <div className="flex justify-center flex-col w-11/12 mx-auto my-6">
                  <button type="submit" className="bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-
                  s transform hover:scale-105">Sign Up</button>
              </div>
    </form>
    <a href="Sign up" className="text-white mx-auto my-1 hover:text-green-500">Forgot your password?</a>
    </main>
    
  );
};

export default Singup;
