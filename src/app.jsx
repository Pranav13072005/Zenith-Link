import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
// import notes from './components/notes.jsx';
import Note from './components/note';
import Header from './components/header';
import Footer from './components/footer';
import CreateArea from './components/createArea';

/*const notes = [
    {
      key: 1,
      title: "Delegation",
      content:
        "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
    },
    {
      key: 2,
      title: "Loops",
      content:
        "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
    },
    {
      key: 3,
      title: "Arrays",
      content:
        "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
    },
    {
      key: 4,
      title: "Hardware vs. Software",
      content:
        "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
    }
  ];
*/


function createBox(boxItem){
    return ( <Note 
        key = {boxItem.key}
        title = {boxItem.title}
        content = {boxItem.content}
        />
        );
    }
    
    function App(){
        const[filterArr, setFilterArr]=useState([]);
        const [arr, setArr]=useState([]);
        function addNote(note){
            setArr((prevArr) => [...prevArr, note]);
            setFilterArr((prevFilterArr) => [...prevFilterArr, note]);
        }
        function deleteArr(id){ 
            setArr(prevArr =>{
                return prevArr.filter((arrItem, index) => {
                    return index!==id;
                });
            })
        }
        
        const [selectedJobType, setSelectedJobType] = useState(null);
      
        const jobTypeOptions = ['Show All','Finance', 'Graphic Design', 'Content Writing', 'Marketing', 'Intern','HR','Data Science'];
      
        const handleDropdownItemClick = (event) => {
          const value = event.target.innerText;
          setSelectedJobType(value);
          let a=0;
          // Use the filter function to filter notes based on the selected job type
          if (value === 'Show All') {
            setFilterArr(arr);
          } else {
            const filtered = arr.filter((arrItem) => arrItem.content === value, a++);
            setFilterArr(filtered);
            console.log(a);
          }
        };

        return(
          <Fragment>
          <div className='Hero'>
            <Header />
          </div>
          <div className="header-2" id="section-2">
            <h1 style={{fontSize:"4rem"}}>HIRE TALENT FROM <span className="span-header2">ZENITH LINK</span></h1>
          </div>
        <div className="main-container">
        <div className="text-container">
          <h1><span className='span-text-container'>Unlock</span> Your Career Potential</h1>
          <h1 className='secondline-text-container'>Where Dreams and Opportunities <br/>Meet!</h1>
        </div>
        <div className="form-container"><CreateArea 
        onAdd = {addNote}/></div>
        </div>
        <div className="jobs-available" id="section-3">
          <div className="jobs-available-header">
          <h1 style={{fontSize:"4rem"}}>LATEST JOBS ON <span className="span-header2">ZENITH LINK</span></h1></div>
        </div>
      <div class="filter">
        <div class="filter-header">VIEW JOBS BY TYPE :</div>
        <div class="btn-group">
      <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: "1.4rem", pading: "4px"}}>
              {selectedJobType || 'SELECT JOB TYPE'}
      </button>
      <ul className="dropdown-menu">
              {jobTypeOptions.map((jobType, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#section-3" onClick={handleDropdownItemClick}>
                    {jobType}
                  </a>
                </li>
              ))}
      </ul>
</div>
      </div>
      
        <div className='updated-stuffs'>
        {filterArr.length === 0 ? (
        <p className='noresults'><i>No results found :/</i></p>
      ) : (
        filterArr.map((arrItem, index) => (
          <Note key={index} id={index} title={arrItem.title} content={arrItem.content} salary={arrItem.salary} onDelete={deleteArr} />
        ))
      )}
        </div><Footer/>
          </Fragment>

    );
}
export default App;