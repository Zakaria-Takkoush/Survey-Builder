import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const SurveyPanel = () => {
  // Initial State... empty array
    const [surveys, setSurveys] = useState([]);

    //Fetch All Surveys from Backend
    async function fetchSurveys() {
      const res = await fetch("http://127.0.0.1:8000/api/v1/diaplay_surveys")
      const data = await res.json();
      return data.surveys;
    }

    // Display Surveys oon load

    useEffect( () => {
      async function getSurveys () {
        const surveys = await fetchSurveys();
        console.log(surveys);
        setSurveys(surveys);
      }
      getSurveys()
    }, [])

    // Fetch a single survey
    async function fetchSurvey() {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/diaplay_survey/1`);
    const data = await res.json();
    return data.survey;
  };

  return (
    <div></div>
  )
}

export default SurveyPanel