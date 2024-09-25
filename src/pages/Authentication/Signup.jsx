import { signup1, signup2, signup3, signup4, apple, facebook, github, microsoft } from '../../assets';

const Signup = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-[#333300] to-[#333300]'>
      <div className='flex bg-gradient-to-b from-[#534825] to-[#4f4e4a] rounded-3xl shadow-lg max-w-5xl w-full px-8 py-4'>
      <div className='flex-1 flex flex-col justify-center p-8'>
          <div className='text-left mb-6'>
            <h2 className='text-4xl font-semibold text-[#e0e0e0]'>Sign Up</h2>
            <h3 className='text-lg text-[#cccccc]'>to your account</h3>
          </div>
          <div className='mb-4 flex justify-between'>
          <div className='flex-1 mr-2 '>
    <label className='block text-[#cccccc] pl-1' htmlFor='firstName'>
      First Name:
    </label>
    <input
      type='text'
      id='firstName'
      className='glassmorphism-input mt-1 w-half p-2 border rounded-xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
      placeholder='Enter Your First Name'
    />
  </div>
  <div className='flex-1 ml-2'>
    <label className='block text-[#cccccc] pl-1' htmlFor='lastName'>
      Last Name:
    </label>
    <input
      type='text'
      id='lastName'
      className='glassmorphism-input mt-1 w-half p-2 border rounded-xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
      placeholder='Enter Your Last Name'
    />
  </div>
          </div>
          <div className='mb-4'>
            <label className='block text-[#cccccc] pl-1' htmlFor='email'>
              Email Address:
            </label>
            <input
              type='text'
              id='email'
              className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
              placeholder='Enter Your Email'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-[#cccccc] pl-1' htmlFor='password'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
              placeholder='Enter Your Password'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-[#cccccc] pl-1' htmlFor='password'>
              Confirm Password:
            </label>
            <input
              type='password'
              id='password'
              className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
              placeholder='Confirm Password'
            />
          </div>
          <div className='mb-4 flex justify-between items-center'>
            <div className='flex items-center'>
              <input type='checkbox' id='remember' name='accept' className='opacity-50 mt-1 mr-1 border rounded-2xl' />
              <label htmlFor='remember' className='text-[#cccccc]'>
                I agree to all terms & conditions
              </label>
            </div>
          </div>
          <div className=''>
            <button className='w-full py-2 bg-[#b8a500] text-white rounded-2xl hover:bg-[#e0e0e0] hover:text-[#b8a500] transition duration-500'>
              Sign Up
            </button>
            <p className='mt-4 text-center text-[#cccccc]'>or continue with</p>
            <div className='flex justify-center space-x-4 mt-4'>
              {/* <img src={google} alt='Google' className='w-8 h-8 grayscale hover:grayscale-0' /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
              <img src={apple} alt='Apple' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2  transition-all duration-500' />
              <img src={microsoft} alt='GitHub' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
              <img src={facebook} alt='Facebook' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
              <img src={github} alt='GitHub' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500'  />
            </div>
          </div>
          <p className='text-white text-center mt-2'> <a href='/login' className='underline' >Already have an account?</a></p>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-3 w-1/2 mt-12 mb-9'>
          <div className='row-span-2'>
          <img src={signup1} alt='Image 1' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full w-full' />    
          </div>
          
          <div className='row-span-1'>
          <img src={signup2} alt='Image 1' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full w-full' />    
          </div>
          
          <div className='row-span-2'>
          <img src={signup3} alt='Image 1' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full w-full' />    
          </div>
          
          <div className='row-span-1'>
          <img src={signup4} alt='Image 1' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full w-full' />    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;