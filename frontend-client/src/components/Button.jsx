import React from 'react'

const Button = ({text, onCLick}) => {
  return (
    <button className='btn' onCLick={onCLick}>{text}</button>
  )
}

export default Button