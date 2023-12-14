import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaRegCircle, FaCheckCircle} from "react-icons/fa";

const Item = ({data, deleteHandler, updateStatus}) => {
  return (
    <div className='border-b border-gray-600'>
      <div className='text-[#494C6B] py-3 h-14 mx-5 flex justify-between items-center '>
        <div className='flex items-center gap-3'>
          {data.complete ? 

          <FaCheckCircle 
            onClick={() => updateStatus(data.id)}
            className='h-4 w-4 mr-3 text-blue-500' />
            :
            <FaRegCircle 
            onClick={() => updateStatus(data.id)}
            className='h-4 w-4 mr-3 text-[#494C6B]' />
          }
            
            <p className={`${data.complete && "line-through"}`}>{data.todoTitle}</p>
        </div>
        <RxCross1 
        onClick={() => deleteHandler(data.id)} 
        className='h-4 w-4 mr-3 text-red-600' 
        />
      </div>
    </div>
  )
}

export default Item
