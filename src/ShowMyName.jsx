import React, { useState } from 'react'

const ShowMyName = () => {

    const [name, setName] = useState("");

    const HandleShwe = () => {
       setName(name + "Shwe ");
    }

    const HandleWin = () => {
       setName( name + "Win ");
    }

    const HandleAung = () => {
       setName( name + "Aung");
    }

    const Clear = () => {
        setName( " ");
     }
  return (
    <div className='p-10'>
        <h1 className='font-9xl font-bold capitalize '>My name is "{name} "</h1>
        <button onClick={HandleShwe} className='border mx-3 border-black bg-black text-slate-300 px-4 py-2 mt-3'>Shwe</button>
        <button onClick={HandleWin} className='border mx-3 border-black bg-black text-slate-300 px-4 py-2 mt-3'>Win</button>
        <button onClick={HandleAung} className='border mx-3 border-black bg-black text-slate-300 px-4 py-2 mt-3'>Aung</button>
        <button onClick={Clear} className='border border-black border-0 mx-3 bg-blue-600 text-slate-100 px-4 py-2 mt-3'>Clear</button>


    </div>
  )
}

export default ShowMyName;