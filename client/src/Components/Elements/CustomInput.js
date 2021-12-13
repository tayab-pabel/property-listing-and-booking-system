const CustomInput = ({ title, data, setData }) => {
  return (
    <div className='bg-white px-4 py-2.5 rounded-lg ring-1 ring-blue-dark ring-opacity-50 w-full'>
      <p className='text-sm font-medium text-blue-dark'>{title}</p>
      <input
        className='focus:outline-none placeholder-gray-400 text-sm w-full'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  )
}

export default CustomInput
