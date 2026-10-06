import { useState } from "react";
import { IoSend } from "react-icons/io5";

function ChatLog() {
  return (
    <>
    
    {/* typing box----------------------------------- */}
    <div className="
    flex
    items-center
    bg-black 
    text-white 
    border border-2 border-white 
    w-[60rem] 
    h-[90px] 
    min-w-[20rem] 
    rounded-xl
    fixed
    top-[85vh]
    left-[25vw]">

      <textarea 
      type='text'
      placeholder="Ask something..." 
      className='
      text-white 
      w-full 
      h-full 
      pt-2 pl-4 pr-4 pb-4 
      outline-none
      border-none 
      '/>
      <button 
      type="button"
      className="
      flex
      justify-center
      items-center
      size-10
      bg-pink-500
      rounded-full
      m-4
      font-black
      text-white
      "
      ><IoSend/></button>
      </div>
      {/* ------------------------------------------------ */}
    </>
    
  );
}
export default ChatLog;
