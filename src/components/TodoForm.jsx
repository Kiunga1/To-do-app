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
    <div className='bg-white py-2 px-5 rounded-md'>
      <form className='flex items-center '  onSubmit={handleSubmit}
      >
      <FaRegCircle className='h-4 w-4 mr-3 text-[#494C6B]'/>
        <div className='w-4/5 text-[#494C6B]'>
            <input
            required
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type='text'
            placeholder='Create new to do item...'
            />
        </div>
        <button type='submit' className='rounded-md text-[#494C6B] bg-purple-200 p-2'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
