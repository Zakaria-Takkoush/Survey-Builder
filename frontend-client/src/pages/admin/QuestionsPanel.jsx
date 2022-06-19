import React from 'react'
import { useEffect , useState } from 'react';

const QuestionsPanel = () => {

  // Initial State... empty array of questions
  const [questions, setQuestions] = useState([]);

  // Get the survey_idfrom local storage
  let survey_id = localStorage.getItem("survey_id")

  //Fetch All questions from Backend
  async function fetchQuestions(id) {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/diaplay_questions/${id}`)
    const data = await res.json();
    return data.questions;
  }

    // Display Questions of the survey oon load

    useEffect( () => {
      async function getQuestions () {
        const questions = await fetchQuestions(survey_id);
        console.log(questions);
        setQuestions(questions);
      }
      getQuestions()
    }, [])

  return (
    <div>QuestionsPanel</div>
  )
}

export default QuestionsPanel