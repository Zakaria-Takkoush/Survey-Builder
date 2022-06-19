// Specific Survey Questions Page

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

      //Add a Question to this survey
   async function addQuestion(question) {
    const res = await fetch("http://127.0.0.1:8000/api/v1/add_question", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(question),
    });
    const data = await res.json();
    setQuestions([...questions, data]);
  };

  //Delete a Question from the survey
  async function deleteQuestion(id) {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/delete_question/${id}`, {
      method: "POST",
      // headers: {
      //   "Content-type": "application/json",
      // },
      // body: JSON.stringify(id),
    });
    //Checking Deletion Status
    res.status === 200 // if Success
      ? setQuestions(questions.filter((question) => question.id !== id))
      : alert("Error Deleting");
  };

  // Edit a question
  async function editQuestion(id, question) {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/edit_question/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(question),
    });
    const data = await res.json();
    setQuestions(questions.map((question) =>
     question.id === id ? {...question, data } : question)
     );
  };

  return (
    <div>QuestionsPanel</div>
  )
}

export default QuestionsPanel