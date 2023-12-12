import React from 'react';
import { FaRegCircle } from "react-icons/fa";


const TodoForm = () => {
  return (
    <div className='bg-white py-2 px-5 rounded-md'>
      <form className='flex items-center gap-3'>
      <FaRegCircle/>
        <div className='w-full'>
            <input
            required
            type='text'
            placeholder='Create new to do item...'
            />
        </div>
      </form>
    </div>
  )
}

export default TodoForm
