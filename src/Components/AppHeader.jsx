import React from 'react'

const AppHeader = () => {
  return (
    <div className='flex justify-around  py-8 border-solid border-b-2 border-slate-400 mb-8 lg:mb-14'>
      <div className='text-4xl'>My Notes (0)</div>
      <select className='bg-slate-200 rounded-md px-4 py-0.5 text-sm border-2 border-solid border-slate-400' name="" id="">
        <option  value="lasted">lasted</option>
        <option  value="fiest">first</option>
      </select>
    </div>
  )
}

export default AppHeader;

