import React, { useContext, useEffect,useState } from 'react'
import NoteContex from '../compononts/notes/NoteContex'
import NoteItem from './NavItem'


function Notes() {
    const context = useContext(NoteContex)
    const { NOt } = context;
    const [note, setNote] = useState(NOt)
    useEffect(() => {
    
        setNote(NOt)
    }, [ NOt])
  
    return (
        <div className="container my-2">
        
        <h2>your Notes</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-3">
            {
                note.map((notee)=>{
                    return <NoteItem note={notee}/>
                })
            }
            </div>
        </div>
    )
}

export default Notes;
