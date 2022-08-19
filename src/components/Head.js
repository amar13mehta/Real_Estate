import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/img/logo.svg";
const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto  flex justify-between items-center'>
        {}
        <Link to='/' className="flex-row">
          <img src={logo} alt='/'></img>
        </Link>
        <div className='flex items-center gap-8'>
          <Link className='text-lg font-semibold text-violet-600 hover:text-violet-800 transition' to='/'>Rent</Link>
          <Link className='text-lg font-semibold text-violet-600 hover:text-violet-800 transition' to='/'>Buy</Link>
          <Link className='text-lg font-semibold text-violet-600 hover:text-violet-800 transition' to='/'>Sell</Link>
          <Link className='text-lg font-semibold text-violet-600 hover:text-violet-800 transition' to='/'>Manage Property</Link>
          <Link className='text-lg font-semibold text-violet-600 hover:text-violet-800 transition ' to='/'>Resources</Link>
          
        </div>
        <div className='flex items-center gap-5'>
          <Link className='hover:text-violet-800 transition' to='/'>Log in</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'>Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
