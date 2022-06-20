import React from 'react'
import { useState } from 'react';

const Add_Survey = ({ onAdd }) => {
 // Initialize Input State
  const [name, setName] = useState("");

//Add Data to Backend on Submit
const onSubmit = (e) => {     // onClick of the submit button
    e.preventDefault();
    if (!name) {              // if the admin enters no name
      alert("Please add a task!");
      return;
    }
    onAdd({ name });
    setName("");              // empty the input box
  };

  return (
    <form className="question" onSubmit={onSubmit}>
        <input type="text" placeholder="Survey Name..." value={name} onChange={(e) => {
            setName(e.target.value);
          }}/>
        <input type={"submit"} value="Save Survey" className="btn"/>
    </form>
  )
}

export default Add_Survey