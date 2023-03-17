import '../App.css';
import { useState } from 'react';
import ReactDOM  from 'react-dom';

const Form = () => {
  const [myProblem, setMyProblem] = useState('');
  const [name, setName] = useState('');
  const [building, setBuilding] = useState('');
  const [room, setRoom] = useState('');
  const [issue, setIssue] = useState('');
  const [comments, setComments] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleMyProblem = (e) => {
    setMyProblem(e.target.value);
  }
  const handleBuilding = (e) => {
    setBuilding(e.target.value);
  }
  const handleRoom = (e) => {
    setRoom(e.target.value);
  }
  const handleIssue = (e) => {
    setIssue(e.target.value);
  }
  const handleComments = (e) => {
    setComments(e.target.value);
  }
  const handleSubmit=(e)=>{
    if(name != name){
      alert("Not in System")
    } else{
      alert('A form was sumbitted with Name: "' + name + '" ,Problem :"' + myProblem +'" and Building :"' + building + '"');
    }
  }

  return (
    <div className="form">
      <h2>Report Your Problem</h2>
      <body className="form-content">
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <label>
            Name:
            </label> <br />
            <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br />
          <label>
            Building:
          </label> <br />
          <input type="text" value={building} required onChange={(e) => {handleBuilding(e)}} /><br/>
          <label>
            Room Location:
            </label><br />
            <input type="text" value={room} required onChange={(e) => {handleRoom(e)}}/><br />
          <label>
            Issue:
            </label><br />
            <input type="text" value={issue} required onChange={(e) => {handleIssue(e)}} /><br />
          <label>
            Comments:
            </label><br />
            <input type="text" value={comments} required onChange={(e) => {handleComments(e)}} /><br />
          <label>
            Problem:
          </label><br />
          <select value={myProblem} onChange={handleMyProblem}>
            <option value="Bathroom">Bathroom</option>
            <option value="Classroom">Classroom</option>
            <option value="Hallways">Halllways</option>
          </select><br />
          <input type="submit" value="Submit"/>
        </form>
      </body>
    </div>
  );
}

export default Form;