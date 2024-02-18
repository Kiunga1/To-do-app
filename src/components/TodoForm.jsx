import React, { useState } from 'react';
import { FaRegCircle } from "react-icons/fa";


const TodoForm = ({addHandler}) => {
  
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add items 
    addHandler(item);
    setItem('');
  }

  return (
    <div className=' py-2 px-5 rounded-md'>
      <form className='flex items-center '  onSubmit={handleSubmit}>
      <FaRegCircle className='h-4 w-4 mr-3 text-[#393A4B]'/>
        <div className='w-4/5 text-[#494C6B]'>
            <input
            required
            className='p-2 rounded-md bg-transparent'
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type='text'
            placeholder='Create new to do item...'
            />
        </div>
        <button type='submit' className='rounded-lg text-[#494C6B] bg-gradient-to-r from-purple-400 to-blue-400 p-2'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
