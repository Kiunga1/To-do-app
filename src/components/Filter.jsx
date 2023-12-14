import React from 'react'

const Filter = ({filterValue}) => {
  return (
    <div className='text-[#494C6B] text-sm flex justify-center gap-10 pt-4 bg-white rounded-md pb-4 '>
      <button onClick={() => filterValue('all')} type='button' className='focus:font-bold'>All</button>
      <button onClick={() => filterValue('active')} type='button' className='focus:font-bold'>Active</button>
      <button onClick={() => filterValue('complete')} type='button' className='focus:font-bold'>Completed</button>

    </div>
  )
}

export default Filter
