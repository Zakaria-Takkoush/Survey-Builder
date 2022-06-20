import React from 'react'
import Button from '../../components/Button'
import Survey_Admin from './Survey_Admin'

// Surveys List for Admin

const Surveys_Admin = ({surveys, onClick}) => {  

  return (
    <div className='surveys-container'>
      {surveys.map((survey) => (
      <Survey_Admin 
      key={survey.id} 
      survey={survey} 
      // onClick={onCLick}
      />
      ))}
    </div> 
  )
}

export default Surveys_Admin
