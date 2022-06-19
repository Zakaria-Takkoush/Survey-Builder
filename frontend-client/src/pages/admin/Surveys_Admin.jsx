import React from 'react'
import Button from '../../components/Button'
import Survey_Admin from './Survey_Admin'

const Surveys_Admin = (surveys) => {

  return (
    <div>
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
