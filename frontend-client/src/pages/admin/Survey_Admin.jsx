import React from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const Survey_Admin = ({survey}) => {

  const navigate = useNavigate();

  return (
    <div className='survey'>
        <h2>{survey.name}</h2>
        <button className='btn' onClick = {() => {
          console.log(survey.name)
          localStorage.setItem("survey_id", survey.id)
          navigate('/surv_panel/questions')
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