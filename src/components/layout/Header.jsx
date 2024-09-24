// import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  async function goToBlog() {
    navigate('/createPost')
  }

  async function goTOProfile(){
    navigate('/profile')
  }

  return (
    <div className='sticky top-0 bg-white w-full h-16 mt-2 flex items-center px-5 shadow-xl justify-between'>
      <div>Logo</div>
      <div className="flex justify-start px-5 py-2 items-center border border-gray-200 rounded-full shadow-lg w-1/4"> 
        <FaSearch />
        <input type="text" className="w-full focus:outline-none pl-3" placeholder="Search" /> 
    </div>
    <div className="flex items-center gap-10 text-lg">
        <button 
        onClick={() => goToBlog()}
        className="flex items-center gap-1">            
            <BiBookAdd />
            Blog
        </button>
        <div>
            <FaBell />
        </div>
        <button 
        onClick={() => goTOProfile()}
        className="rounded-full border-2 w-12 h-12 flex items-center justify-center">
            P
        </button>
        <a href="/login">
        <div className="flex items-center w-20 justify-center py-2 bg-[#b8a500] text-white rounded-2xl hover:bg-[#e0e0e0] hover:text-[#b8a500] transition duration-500  p-2">
          <Link to='/login'>
          Sign In
          </Link>
        </div>
        </a>
    </div>
    
    </div>
  )
}

export default Header;
