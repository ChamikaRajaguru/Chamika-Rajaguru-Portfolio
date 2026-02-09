import React from 'react'

export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn btn-accent"
    >
      {children}
    </button>
  )
}
