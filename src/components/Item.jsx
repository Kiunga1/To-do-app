import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";

const Item = () => {
  return (
    <div className='border-b border-gray-600'>
      <div className='text-[#494C6B] py-3 h-14 mx-5 flex justify-between items-center '>
        <div className='flex items-center gap-3'>
            <FaRegCircle/>
            <p>React</p>
        </div>
        <RxCross1 className='h-4 w-4 mr-3 text[#494C6B]' />
      </div>
    </div>
  )
}

export default Item
