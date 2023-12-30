import React, { useState } from 'react'

const AddNewNote = () => {
  const [newNote,setNewNote]=useState("")
  const [newDesc,setNewDesc]=useState("")
  const addHandler=(e)=>{
    
      e.preventDefault();
      setNewNote("");
      setNewDesc("");
    
  }
  return (
    <form className='flex flex-col gap-4 md:flex-row  md:justify-center px-4 ' onSubmit={addHandler}>
        <input className='block h-10 rounded-md' type="text" value={newNote} onChange={(e)=>setNewNote(e.target.value)} />
        <input className='block h-10 rounded-md' type="text" value={newDesc} onChange={(e)=>setNewDesc(e.target.value)} />
        <button className='block bg-green-500 text-slate-200 px-6 py-2 rounded-md hover:bg-green-600 hover:text-slate-100' type='submit' >Add New Note</button>
    </form>
  )
}

export default AddNewNote