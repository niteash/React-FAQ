import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(11);

  const Increment  = () => {
    return setCount(count + 1);
  }

  const Decrement  = () => {
    return setCount(count - 1);
  }
  return (


    <div className="p-10  ">
      <h1 className=" font-bold text-9xl">{count}</h1>
      <button onClick={Increment}
       className="border border-black px-4 py-2 bg-black text-slate-200">
        Increase
      </button>
      <button onClick={Decrement}
       className="border mx-5 border-black px-4 py-2 bg-black text-slate-200">
        Decrese
      </button>
    </div>
  ); 
};

export default App;
