import React from 'react'

export default function Button({children, className = '', ...props}){
  return (
    <button className={`px-4 py-2 rounded-md bg-[#7A2FF7] text-white ${className}`} {...props}>{children}</button>
  )
}
