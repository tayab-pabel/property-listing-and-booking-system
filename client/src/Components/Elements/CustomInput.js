const CustomInput = ({ title, data, setData }) => {
  return (
    <div className='bg-white px-4 py-2 rounded-lg ring-1 ring-blue-dark ring-opacity-50 w-full'>
      <p className='text-sm font-bold text-blue-dark text-left'>{title}</p>
      <input
        className='mt-1.5 focus:outline-none placeholder-blue-dark text-sm w-full'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  )
}

export default CustomInput
