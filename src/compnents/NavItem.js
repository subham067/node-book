import React, { useContext, useState } from 'react'
import NoteContex from '../compononts/notes/NoteContex';

function NavItem(props) {
    const context = useContext(NoteContex)
    const { note } = props;
    const { deleteNote, editNote } = context;
    const handleClick = () => {


        deleteNote(note._id)
    }




    const [enote, seteNote] = useState({ });
    const onchange = (e) => {

        seteNote({ ...enote, [e.target.name]: e.target.value })
    }
    const ehandleClick = () => {
       
      
        
        console.log(enote);
        editNote (note._id,"1233445","enote.description","subham" )
    }
  



  
    return (
        <div>
            <div className="col shadow ">
                <div className="card">

                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{note.tittle} </h5>
                            <div className=""> <button type="button" className="btn  btn-sm btn-danger" onClick={handleClick}>
                                <i class="fas fa-trash-alt" ></i>
                            </button>
                            {/* <button type="button" className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i class="fas fa-edit"></i>
                                </button> */}
                             </div>
                        </div>
                        <p className="card-text">
                            {note.description}
                        </p>

                    </div>
                </div>
            </div>





            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                            Edit note
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
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
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary"   data-bs-dismiss="modal" onClick={ehandleClick}  >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavItem
