// Signup.js
import { useState } from 'react';
import axios from 'axios';
import {signup1, signup2, signup3, signup4, facebook, github, microsoft, googleIcon} from '../../assets';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
    if (id === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (strongRegex.test(password)) {
      setPasswordStrength('Strong');
    } else if (password.length >= 6) {
      setPasswordStrength('Medium');
    }
    else if (password.length == 0) {
      setPasswordStrength('');
    }
     else {
      setPasswordStrength('Weak');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords not matched';
    }
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';

    setErrors(newErrors);
    setTimeout(() => setErrors({}), 2500);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2500);
      console.log('Signup Successful', response.data);
    } catch (error) {
      setErrors({ form: error.response?.data?.message || 'Signup failed. Please try again.' });
      setTimeout(() => setErrors({}), 2500);
    }
  };

  const handleGoogleAuth = () => {
    // Redirect to the backend Google auth endpoint
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-[#333300] to-[#333300] pt-4 pb-4'>
      <div className='flex bg-gradient-to-b from-[#534825] to-[#4f4e4a] rounded-3xl shadow-lg max-w-5xl w-full px-8 py-4'>
        <form onSubmit={handleSubmit} className='flex-1 flex flex-col justify-center p-8'>
          <div className='text-left mb-6'>
            <h2 className='text-4xl font-semibold text-[#e0e0e0]'>Sign Up</h2>
            <h3 className='text-lg text-[#cccccc]'>to your account</h3>
          </div>
          {errors.form && <p className="text-red-500 text-sm mb-4">{errors.form}</p>}
          {showSuccess && <p className="text-green-500 text-sm mb-4">Signup successful! Check your email to verify your account.</p>}
          <div className='mb-4 flex justify-between'>
            <div className='flex-1 mr-2'>
              <label className='block text-[#cccccc] pl-1' htmlFor='firstName'>First Name:</label>
              <input
                type='text'
                id='firstName'
                value={formData.firstName}
                onChange={handleChange}
                className='glassmorphism-input mt-1 w-half p-2 border rounded-xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
                placeholder='Enter Your First Name'
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className='flex-1 ml-2'>
              <label className='block text-[#cccccc] pl-1' htmlFor='lastName'>Last Name:</label>
              <input
                type='text'
                id='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='glassmorphism-input mt-1 w-half p-2 border rounded-xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
                placeholder='Enter Your Last Name'
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-[#cccccc] pl-1' htmlFor='email'>Email Address:</label>
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
              placeholder='Enter Your Email'
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-[#cccccc] pl-1' htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={formData.password}
              onChange={handleChange}
              className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
              placeholder='Enter Your Password'
            />
            <p className={`text-sm ${passwordStrength === 'Strong' ? 'text-green-500' : passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
              {passwordStrength}
            </p>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-[#cccccc] pl-1' htmlFor='confirmPassword'>Confirm Password:</label>
            <input
              type='password'
              id='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
              placeholder='Confirm Password'
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
          <div className='mb-4 flex items-center'>
            <input
              type='checkbox'
              id='termsAccepted'
              checked={formData.termsAccepted}
              onChange={handleChange}
              className='opacity-50 mt-1 mr-1 border rounded-2xl'
            />
            <label htmlFor='termsAccepted' className='text-[#cccccc]'>
              I agree to all terms & conditions
            </label>
            {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}
          </div>
          <button type='submit' className='w-full py-2 bg-[#b8a500] text-white rounded-2xl hover:bg-[#e0e0e0] hover:text-[#b8a500] transition duration-500'>
            Sign Up
          </button>
          <p className='mt-4 text-center text-[#cccccc]'>or continue with</p>
          <div className='flex justify-center space-x-4 mt-4'>
            <img src={googleIcon} alt='Apple'
            onClick={handleGoogleAuth}
            className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
            <img src={microsoft} alt='Microsoft' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
            <img src={facebook} alt='Facebook' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
            <img src={github} alt='GitHub' className='w-8 h-8 grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-500' />
          </div>
          <p className='text-white text-center mt-2'>
            <a href='/login' className='underline'>Already have an account?</a>
          </p>
        </form>
        <div className='grid grid-cols-2 grid-rows-2 gap-3 w-1/2 mt-12 mb-9'>
          <img src={signup1} alt='Image 1' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full w-full' />
          <img src={signup2} alt='Image 2' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full w-full' />
          <img src={signup3} alt='Image 3' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full w-full' />
          <img src={signup4} alt='Image 4' className='rounded-lg hover:-translate-y-2 transition-all duration-500 h-full w-full' />
        </div>
      </div>
    </div>
  );
};

export default Signup;