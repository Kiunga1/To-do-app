import React from 'react'

const Filter = () => {
  return (
    <div className='text-[#494C6B] text-sm flex justify-center gap-10 pt-4 bg-white rounded-md pb-4 '>
      <button type='button' className='focus:font-bold'>All</button>
      <button type='button' className='focus:font-bold'>Active</button>
      <button type='button' className='focus:font-bold'>Completed</button>

    </div>
  )
}

export default Filter
