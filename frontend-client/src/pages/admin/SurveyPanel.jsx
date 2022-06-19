import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Surveys_Admin from './Surveys_Admin';

const SurveyPanel = ( ) => {
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
    async function fetchSurvey(id) {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/diaplay_survey/${id}`);
    const data = await res.json();
    return data.survey;
  };

  //Add a survey
   async function addSurvey(survey) {
      const res = await fetch("http://127.0.0.1:8000/api/v1/add_survey", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(survey),
      });
      const data = await res.json();
      setSurveys([...surveys, data]);
    };

  return (

    <div className="container">

        <div className="survey_nmae">
            <h1>Available Surveys</h1>
        </div>

        <div className="surveys-container">

            {/* {surveys.map((survey) => (
              <p>{survey.name}</p>
            ))} */}

          {surveys.length > 0 ? <Surveys_Admin surveys={surveys}/> : <h2>No Surveys</h2>}

        </div>

    </div>

  )
}

export default SurveyPanel