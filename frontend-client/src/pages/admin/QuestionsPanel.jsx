import React from 'react'
import { useEffect , useState } from 'react';

const QuestionsPanel = () => {

  // Initial State... empty array of questions
  const [questions, setQuestions] = useState([]);

  //Fetch All questions from Backend
  async function fetchQuestions(id) {
    const res = await fetch(`http://127.0.0.1:8000/api/v1//diaplay_questions/${id}`)
    const data = await res.json();
    console.log(data)
    return data;
  }
  fetchQuestions()
  

  return (
    <div>QuestionsPanel</div>
  )
}

export default QuestionsPanel