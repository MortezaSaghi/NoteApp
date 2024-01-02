import React, { useState } from 'react'

const AddNewNote = ({isShowAddNote}) => {
  const [newNote,setNewNote]=useState("")
  const [newDesc,setNewDesc]=useState("")
  const addHandler=(e)=>{
    
      e.preventDefault();
      setNewNote("");
      setNewDesc("");
    
  }
  return (
    <form className={`flex flex-col gap-4 p-4 border-2 border-solid border-slate-300 rounded-md ${!isShowAddNote?"hidden":""} md:flex`} onSubmit={addHandler}>
        <h3 className='font-bold text-slate-600 mb-4'>Add New Notes</h3>
        <input className='block w-full h-10 rounded-md px-4' type="text" value={newNote} onChange={(e)=>setNewNote(e.target.value)} placeholder='Enter Name Note' />
        <input className='block w-full h-10 rounded-md px-4' type="text" value={newDesc} onChange={(e)=>setNewDesc(e.target.value)} placeholder='Enter Description' />
        <button className='md:w-1/2 md:mx-auto bg-green-500 text-slate-200 py-2 rounded-md hover:bg-green-600 hover:text-slate-100' type='submit' >Add</button>
    </form>
  )
}

export default AddNewNote