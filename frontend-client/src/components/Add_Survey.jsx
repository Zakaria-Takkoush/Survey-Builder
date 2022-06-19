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
    <form className="question" onSubmit={onSubmit}>
        <input type="text" placeholder="Question Text" value={name} onChange={(e) => {
            setName(e.target.value);
          }}/>
        <input type={"submit"} value="Save Survey" className="btn"/>
    </form>
  )
}

export default Add_Survey