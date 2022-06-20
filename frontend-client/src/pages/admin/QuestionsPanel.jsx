// Specific Survey Questions Page

import React from 'react'
import { useEffect , useState } from 'react';

const QuestionsPanel = () => {

  // Initial State... empty array of questions
  const [questions, setQuestions] = useState([]);

  // Getting and Setting the value of the question type
  const [q_type, setQ_type] = useState(1);

  // Getting and Setting the text of the question
  const [text, setText] = useState("");

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

   async function addQuestion() {
    // console.log(q_type)
    let question_to_add = new FormData();
    question_to_add.append('survey_id', survey_id);
    question_to_add.append('qtype_id', q_type);
    question_to_add.append('text', text);

    const res = await fetch("http://127.0.0.1:8000/api/v1/add_question", {
      method: "POST",
      body: question_to_add,
    });
    const data = await res.json();
    // console.log(data)
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
    <div className='.container'>
  <div className="add-question">
    <input type="text" placeholder="Question Text" value={text} onChange={(e) => {
      setText(e.target.value)
    }} />
    <label>Type: </label>
    <select name="" id="" value={q_type} onChange={(e) => {
      setQ_type(e.target.value)
      // console.log(e.target.value)
    }}>
        <option value="1">Text</option>
        <option value="2">Dropdown</option>
        <option value="3">Checkbox</option>
        <option value="4">Radio Buttons</option>
        <option value="5">Date</option>
        <option value="6">Yes/No</option>
    </select>
    <button className='btn' onClick={addQuestion}>Add Question</button>
</div>
<div className='questions-container'>
  {questions.map((question) => (
              <p>{question.text}</p>
            ))}
</div>

</div>
  )
}

export default QuestionsPanel