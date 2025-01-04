  import { useState } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import { login, googleAuth } from '../../service/authService';

  import { login1, login2, login3, googleIcon, microsoft, github, facebook } from '../../assets';

  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await login(email, password);
        sessionStorage.setItem('isVerified', 'true');
        navigate('/dashboard');
      } catch (err) {
        setError(err.message || 'Login failed');
      }
    };
  

    return (
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-[#333300] to-[#333300]'>
        {/* Form and design elements here remain unchanged */}
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <div className='flex bg-gradient-to-b from-[#534825] to-[#4f4e4a] rounded-3xl shadow-lg max-w-5xl w-full p-8'>
          <div className='grid grid-cols-2 grid-rows-2 gap-3 w-1/2'>
            <div className='row-span-2 '>
              <img src={login1} alt='Image 1' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full' />
            </div>
            <div className='row-span-1'>
              <img src={login2} alt='Image 2' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full' />
            </div>
            <div className='flex space-x-3'>
              <img src={login3} alt='Image 3' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full' />
            </div>
          </div>
          <div className='flex-1 flex flex-col justify-center px-8'>
            <div className='text-left mb-6'>
              <h2 className='text-4xl font-semibold text-[#e0e0e0]'>Sign In</h2>
              <h3 className='text-lg text-[#cccccc]'>to your Account</h3>
            </div>
            <form onSubmit={handleLogin}>
              <div className='mb-4'>
                <label className='block text-[#cccccc] pl-1' htmlFor='email'>
                  Email Address:
                </label>
                <input
                  type='text'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
                  placeholder='Enter Your Email'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-[#cccccc] pl-1' htmlFor='password'>
                  Password:
                </label>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
                  placeholder='Enter Your Password'
                  required
                />
              </div>
              <div className='mb-4 flex justify-between items-center'>
                <div className='flex items-center'>
                  <input type='checkbox' id='remember' name='remember' className='opacity-50 mt-1 mr-1 border rounded-2xl' />
                  <label htmlFor='remember' className='text-[#cccccc]'>
                    Remember me
                  </label>
                </div>
                <a href='#' className='text-[#cccccc] hover:underline'>
                  Forget Password
                </a>
              </div>
              <div className='mb-6'>
                <button type='submit' className='w-full py-2 bg-[#b8a500] text-white rounded-2xl hover:bg-[#e0e0e0] hover:text-[#b8a500] transition duration-700'>
                  Sign In
                </button>
                <p className='mt-4 text-center text-[#cccccc]'>or continue with</p>
                <div className='flex justify-center space-x-4 mt-4'>
                  {/* Social Login Buttons */}
                  <img src={googleIcon} alt='Google' 
                  onClick={googleAuth}
                  className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
                  <img src={microsoft} alt='Microsoft' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
                  <img src={facebook} alt='Facebook' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
                  <img src={github} alt='GitHub' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
                </div>
              </div>
            </form>
            <p className='text-white text-center'>
              <a href='/signup' className='underline'>
                Dont have an Account?
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Login;
