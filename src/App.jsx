/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaMoon,  FaSun} from "react-icons/fa";
import './App.css'
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';
import Item from './components/Item';

import { GetThemeValues } from './components/ContextTheme';

const App = () => {

  const {darkMode, themeHandler} = GetThemeValues()

 const [todos, setTodos] = useState([]);
 const [filter, setFilter] = useState('all');

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

  //Function to update filter value
  const setFilterValue = (value) => setFilter(value);

  //Function to get number of displayed items
  const getNum = () => {
    if(filter === 'all') {
      return todos.length
    }else if (filter === 'active'){
    return todos.filter(todo =>!todo.complete).length
    }else if (filter === 'complete'){
      return todos.filter(todo =>todo.complete).length
    }
    return 0;
  }

  //Function to render todo based on filter
  const renderTodos = () => {
    let filteredList;
    if (filter === 'all' ) {
      filteredList = todos
    }else if(filter === 'active'){
      filteredList = todos.filter(todo => !todo.complete)
    }else if(filter === 'complete') {
      filteredList = todos.filter(todo => todo.complete)
    }else{
      filteredList = todos;
    }

    return filteredList.map(todo =>(
      <Item key={todo.id} data = {todo} deleteHandler={removeTodoById} updateStatus={toggleTodoStatus} />
    ))
  }
  //'  '

  return (
    <div className={`${darkMode ? "bg-[#171823] " : "bg-[#E3E4F1]"}  min-h-screen text-white cursor-pointer `}>
      <div className="bg-mobile_img h-52 px-5 py-8">
        <div className='flex justify-between items-center lg:w-[50%] lg:mx-auto'>
          <h1 className='text-3xl font-semibold tracking-[6px]'>TODO</h1>
          {darkMode ? <FaSun onClick={themeHandler} className='w-6 h-6'/> : <FaMoon onClick={themeHandler} className='w-6 h-6' />}
        </div>
        <div className={`${darkMode ? 'bg-[#25273D] text-white-400' : 'bg-white text-black'} mt-10 lg:w-[50%] lg:mx-auto rounded-md`}>
          <TodoForm addHandler={addTodo}
          />
        </div>
      </div>
      
      <div className={`${darkMode ? 'bg-[#25273D]  ' : 'bg-white'} mx-5 rounded-md relative -top-8 lg:w-[48%] lg:mx-auto`}>
        {/*todos.map((todo) =>
         <Item key={todo.id} 
         data={todo} ''
         deleteHandler={removeTodoById}
          updateStatus={toggleTodoStatus}/>)*/}
       
        {renderTodos()}

        <div className='flex justify-between items-center text-sm mx-5 h-14'>
          <p className='text-[#494C6B]'>{getNum()} items left </p>
          <button 
          type='button' 
          className='text-[#494C6B] focus:font-bold'
          onClick={clearCompletedTodos}
          >Clear Completed</button>
        </div>
        
      </div>
      <div className={`${darkMode ? 'bg-[#25273D]' : 'bg-white'} rounded-md mx-5 lg:w-[48%] lg:mx-auto`}>
        <Filter filterValue={setFilterValue}/>
      </div>

      <div className='text-center py-8  lg:w-[48%] lg:mx-auto'>
        <p className='text-[#494C6B] items-center '>Drag and drop to reorder list</p>
      </div>
      
    </div>
  )
}

export default App
