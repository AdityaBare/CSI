import React from 'react'

export default function Card({children, className = ''}){
  return (
    <div className={`rounded-lg bg-gray-900 p-4 shadow ${className}`}>{children}</div>
  )
}
