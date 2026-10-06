import React, { useState } from 'react'

const Count = () => {

  const [count, setCount] = useState(0);

  function increase(){
    setCount(count+1)
  }

  function descrease(){
    setCount(count-1)
  }

  function reset(){
    setCount(0)
  }

  return (
    <div className='min-h-screen min-w-screen bg-amber-100'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-4xl font-semibold bg-amber-700 rounded-3xl py-2 px-4'>Counter</h1>
        <h3 className='my-6 text-6xl font-semibold mt-15 text-black'>{count}</h3>
        <div >
          <button 
          className='font-semibold text-4xl active:scale-90 bg-red-500 text-white rounded-full h-20 w-20 m-4 mt-10' 
          onClick={descrease}>
            -
          </button>
          <button 
          className='font-semibold text-4xl active:scale-90 bg-gray-400 text-white rounded-full h-20 w-20 m-4 mt-0'
          onClick={reset}>
            0
          </button>
          <button 
          className='font-semibold text-4xl active:scale-90 bg-green-500 text-white rounded-full h-20 w-20 m-4 mt-10'
          onClick={increase}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Count