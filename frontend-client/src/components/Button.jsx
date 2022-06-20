import React from 'react'

const Button = ({text, onCLick}) => {
  return (
    <button className='btn' onClick={onCLick} > {text}</button>
  )
}

export default Button