import React, {useState}from "react";


function CreateArea(props) {
    const [note, setNote] = useState({
        key: 1,
        title: "",
        content:"",
        salary:""
    });
    function handleChange(event) {
        const {name, value}= event.target;
        setNote(prevNote =>{
                return{
                    ...prevNote,
                    [name]: value
                };
        })
    }
    function submitNote(event) {
      if (!note.title || !note.content || !note.salary) {
          alert("Please fill in all the fields before uploading.");
      } else {
          props.onAdd(note);
          setNote({
              title: "",
              content: "",
              salary: ""
          });
      }
      event.preventDefault();
  }
  
  return (
    <div>
      <form>
        <div className="main">
        <div className="sub2">
        <select name="content" onChange={handleChange}value={note.content}placeholder="Choose Job Type" rows="3">
                <option value="" disabled selected>Choose Job Type</option>
                    <option class="option">Finance</option>
                    <option class="option">Graphic Design</option>
                    <option class="option">Content Writing</option>
                    <option class="option">Marketing</option>
                    <option class="option">Intern</option>
                    <option class="option">Data Science</option>
                    <option class="option">HR</option>
        </select>
        <input name="salary" onChange={handleChange} value ={note.salary}placeholder="Stipend/Salary" className="text" />
        </div>

<div className="sub1">
  <input name="title" onChange={handleChange} value={note.title} placeholder=" " className="title"/>
  <label className="placeholder">Enter Job Description</label>
</div>
        </div>
        <button onClick={submitNote} className="button">Upload</button>
      </form>
    </div>
  );
}

export default CreateArea;