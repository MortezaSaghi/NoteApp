import React from 'react'

 const NoteStatus = () => {
  return (
    <div className="note-status flex justify-around items-center py-2  text-l font-bold text-slate-500 max-w-screen-md lg:mx-auto">
              <div >All <span className='bg-slate-100 p-0.5 rounded-md'>5</span></div>
              <div>Completed <span className='bg-slate-100 p-0.5 rounded-md'>2</span></div>
              <div>Open <span className='bg-slate-100 p-0.5 rounded-md'>3</span></div>
            </div>
  )
}
export default NoteStatus;
