import React, { useState, useContext } from 'react'
import NoteContex from '../compononts/notes/NoteContex';

function AddNote() {
    const context = useContext(NoteContex);
    const { addNote } = context;
   
    const [note, setNote] = useState({ });
    const onchange = (e) => {

        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleClick = async(e) => {
        e.preventDefault();
        
        console.log(note);
       await addNote (note)
    }
  
    return (
        <div>
            <div className="container">
                <h2>Add note</h2>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Tittle
                    </label>
                    <input
                        name="tittle"
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your tittle hear"
                        onChange={onchange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        describtion textarea
                    </label>
                    <textarea
                        name="description"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                        onChange={onchange}
                    />
                </div>
                <button className="btn btn-primary" onClick={handleClick}>submit</button>

            </div>
        </div>
    )
}

export default AddNote
