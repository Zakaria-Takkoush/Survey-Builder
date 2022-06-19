import React from 'react'

const Add_Survey = ({ onAdd }) => {
 // Initialize Input State
  const [name, setName] = useState("");

//Add Data to Backend on Submit
const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a task!");
      return;
    }
    onAdd({ name });
    setName("");
  };

  return (
    <div className="question">
        <input type="text" placeholder="Question Text" value={name} onChange={(e) => {
            setName(e.target.value);
          }}/>
        <button>Add Question</button>
    </div>
  )
}

export default Add_Survey