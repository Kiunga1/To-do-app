import React from 'react'
import { FaMoon } from "react-icons/fa";
import './App.css'
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';
import Item from './components/Item';

const App = () => {
  return (
    <div className='min-h-screen bg-[#E3E4F1] text-white'>
      <div className="bg-mobile_img h-52 px-5 py-8">
        <div className='flex justify-between items-center lg:w-[50%] lg:mx-auto'>
          <h1 className='text-3xl font-semibold tracking-[6px]'>TODO</h1>
          <FaMoon className='w-6 h-6'/>
        </div>
        <div className='mt-10 lg:w-[50%] lg:mx-auto'>
          <TodoForm/>
        </div>
      </div>
      <div className='mx-5 bg-white rounded-md relative -top-8 lg:w-[48%] lg:mx-auto'>
        <Item/>
        <Item/>

        <div className='flex justify-between items-center text-sm mx-5 h-14'>
          <p className='text-[#494C6B]'>5 items left</p>
          <button type='button' className='text-[#494C6B] focus:font-bold'>Clear Completed</button>
        </div>
        
      </div>
      <div className='mx-5 lg:w-[48%] lg:mx-auto'>
        <Filter/>
      </div>

      <div className='text-center py-8  lg:w-[48%] lg:mx-auto'>
        <p className='text-[#494C6B] items-center '>Drag and drop to reorder list</p>
      </div>
      
    </div>
  )
}

export default App
