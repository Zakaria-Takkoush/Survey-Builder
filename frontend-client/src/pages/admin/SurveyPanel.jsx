import React from 'react'
import { useState } from 'react';

const SurveyPanel = () => {
  // Initial State... empty array
    const [surveys, setSurveys] = useState([]);

    //Fetch All Surveys from Backend
    async function getSurveys() {
      const res = await fetch("http://127.0.0.1:8000/api/v1/diaplay_surveys")
      const data = await res.json();
      console.log(data)
      return data;
    }

    getSurveys()

    // Display Surveys oon load
    

  return (
    <div></div>
  )
}

export default SurveyPanel