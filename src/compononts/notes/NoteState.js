import React, { useState,useEffect } from 'react'
import NoteContext from './NoteContex'
// eslint-disable-next-line

const NoteState = (props) => {
  
    const NOte = []
   
    const [NOt, setNOt] = useState(NOte)
  
    //    add a note note
    const addNote = (noot) => {
      let x = localStorage.getItem("jwtData");
        const data = noot;

        fetch('http://localhost:5000/api/notes/addNotes', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
            'auth-token': x

          },
          body:JSON.stringify(data),
        })
        .then(response => response.json())
      
        .catch((error) => {
          console.error('Error:', error);
        });

       
     subham();
       
        console.log(NOt);
        // NOte.push(NOtee)

    }
function subham() {
  let x = localStorage.getItem("jwtData");
  const data = { username: 'example' };

  fetch('http://localhost:5000/api/notes/fatch', {
    method: 'POST', // or 'PUT'
    headers: {
    
      'auth-token': x
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
      setNOt(data)
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  console.log("call subham");
}
    
    const deleteNote = (ide) => {
  
      let x = localStorage.getItem("jwtData");
        fetch(`http://localhost:5000/api/notes/deleteNote/${ide}`, {
          method: 'PUT', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
            'auth-token': x

          },
        
        })
        .then(response => response.json())
      
        .catch((error) => {
          console.error('Error:', error);
        });
        console.log(ide);
        const newNotes = NOt.filter((note) => { return note._id !== ide })
        setNOt(newNotes)
    }
    // Edit a note
    const editNote = (id, tittle,description,tag) => {
      let x = localStorage.getItem("jwtData");
      console.log(tittle,description,tag);
       
        fetch(`http://localhost:5000/api/notes/updateNote/616c34ffb9296a67b5da3251`, {
          method: 'PUT', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
            'auth-token': x,
            body: JSON.stringify({tittle,description,tag}),
          },
        
        })
        .then(response =>{
         response.json()
         console.log();
        })
        
          
      
        .catch((error) => {
          console.error('Error:', error);
        });
        subham()
    }
    useEffect(() => {
      let x = localStorage.getItem("jwtData");
      const data = { username: 'example' };

      fetch('http://localhost:5000/api/notes/fatch', {
        method: 'POST', // or 'PUT'
        headers: {
        
          'auth-token': x

        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
          setNOt(data)
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [ ])
    return (
        <NoteContext.Provider value={{ NOt, addNote, deleteNote, editNote,subham }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;