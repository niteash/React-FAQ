import React, { useState } from "react";

const Faq = ({ faq: { id, question, answer,isOpen }, ToggleQuestion}) => {


    
    // const [open, setOpen] = useState(false);

    const handleOpen = () => {
        // setOpen(!open);
        ToggleQuestion(id);
    }


  return (
    <div className="">

      <div onClick={handleOpen} 
      className=" flex justify-between items-center font-bold  border select-none active:scale-y-75 first:border-t-2 border-0 hover:bg-black hover:text-slate-300 duration-200 border-gray p-5">
        
      <h1 className={`text-xl  ${isOpen === false ? " " : "font-bold capitalize"}`}>{question }</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 duration-500 ${isOpen === false ? " " : "rotate-180"}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


         </div>


      <p className={` bg-gray-200  duration-200 p-5 ${isOpen === false ? "hidden" : " "}` }>
      {answer}
      </p>
    </div>
  );
};

export default Faq;
