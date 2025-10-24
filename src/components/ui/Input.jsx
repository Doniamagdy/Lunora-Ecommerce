import React from 'react'

function Input({type , placeholder, ...props} ) {
  return (
    <input {...props} type={type} placeholder={placeholder}        className="w-full border-b border-[#cfb798] focus:outline-none bg-transparent py-3 text-gray-700 placeholder-gray-400"
 />
  )
}

export default Input
