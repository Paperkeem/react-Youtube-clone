import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiFillYoutube } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e) => { setText(e.target.value) };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  
  useEffect(() => setText(keyword || ""), [keyword]);
  
  return (
    <header className='w-full flex p-4 text-2xl
    border-b border-gray-300 mb-4'>
        <Link to='/' className='flex items-center'>
          <AiFillYoutube className='text-4xl text-brand'/>  
          <h1 className='font-bold ml-2 text-3xl'>YouTube</h1>
        </Link>
        <form className='w-full flex justify-center' onSubmit={ handleSubmit }>
          <input
            className='w-7/12 p-2 outline-none bg-black text-gray-50'
            type="text"
            value={text || ""} 
            onChange={ handleChange }
            placeholder='Search...' />
          <button className='bg-zinc-600 px-4'>
              <AiOutlineSearch />
          </button>
        </form>
    </header>
  );
}

