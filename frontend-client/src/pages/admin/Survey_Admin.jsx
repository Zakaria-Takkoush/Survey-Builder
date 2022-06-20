import React from 'react'
import Button from '../../components/Button'

const Survey_Admin = ({survey}) => {
  return (
    <div className='survey'>
        <h2>{survey.name}</h2>
        {/* <Button text={"Edit Survey"} onClick = {() => {
        }}/> */}
    </div>
  )
}

export default Survey_Admin