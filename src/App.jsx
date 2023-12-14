import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa";
import './App.css'
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';
import Item from './components/Item';

const App = () => {

 const [todos, setTodos] = useState([]);
 

  //function to add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      todoTitle: text,
      complete: false,
    }

    setTodos([newTodo, ...todos]);
  }

  //function to delete an item from the list
  const removeTodoById =(id) => {
    const newList = todos.filter(todo => todo.id !== id)
    setTodos(newList);
  }

  
  // Function to check status
  const toggleTodoStatus = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo
      })
    );
  }

  //Function to delete completed todos
  const clearCompletedTodos = () => {
    const todoItems = todos.filter(todo => !todo.complete);
    setTodos(todoItems)
  }

  return (
    <div className='min-h-screen bg-[#E3E4F1] text-white'>
      <div className="bg-mobile_img h-52 px-5 py-8">
        <div className='flex justify-between items-center lg:w-[50%] lg:mx-auto'>
          <h1 className='text-3xl font-semibold tracking-[6px] px-4'>TODO</h1>
          <FaMoon className='w-6 h-6'/>
        </div>
        <div className='mt-10 lg:w-[50%] lg:mx-auto'>
          <TodoForm addHandler={addTodo}
          />
        </div>
      </div>
      <div className='mx-5 bg-white rounded-md relative -top-8 lg:w-[48%] lg:mx-auto'>
        {todos.map((todo) => <Item key={todo.id} data={todo} deleteHandler={removeTodoById} updateStatus={toggleTodoStatus}/>)}
       
        

        <div className='flex justify-between items-center text-sm mx-5 h-14'>
          <p className='text-[#494C6B]'>5 items left</p>
          <button 
          type='button' 
          className='text-[#494C6B] focus:font-bold'
          onClick={clearCompletedTodos}
          >Clear Completed</button>
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
