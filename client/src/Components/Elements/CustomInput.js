import React from 'react'

const CustomInput = ({ title, data, setData }) => {
  return (
    <div>
       {/* Large Device */}
      <div className='hidden lg:block'>
        <div className='bg-white px-4 py-2 rounded-lg border border-blue-dark w-full'>
          <p className='text-sm font-bold text-blue-dark text-left'>{title}</p>
          <input
            className='mt-1.5 focus:outline-none placeholder-blue-dark text-sm w-full'
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
      </div>

       {/* Small Device */}
       <div className='lg:hidden'>
        <p className='text-sm font-bold text-blue-dark text-left mb-1'>{title}</p>
        <div className='bg-white px-4 py-2 rounded-lg border border-blue-dark w-full'>
          <input
            className='focus:outline-none placeholder-blue-dark text-sm w-full'
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default CustomInput
