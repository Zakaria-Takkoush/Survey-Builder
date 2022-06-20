import React from 'react'
import Button from '../../components/Button'

const Survey_Admin = ({survey}) => {
  return (
    <div className='survey'>
        <h2>{survey.name}</h2>
        <button className='btn' onClick = {() => {
          console.log(survey.name)
          localStorage.setItem("survey_id", survey.id)
        }}>
        Edit Survey
        </button>
        {/* <Button 
        text={"Edit Survey"}
        onClick = {() => {
          console.log(survey.name)
          localStorage.setItem("survey_id", survey.id)
        }}/> */}
    </div>
  )
}

export default Survey_Admin