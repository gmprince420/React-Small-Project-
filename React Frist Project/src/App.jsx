import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);

  function decrementEvent() {
    setcount( count-1)
  }

  function incrementEvent() {
    setcount(count+1)
  }

  function resetEvent() {
    setcount(0)
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10 ">
      <h1 className="text-[#0398d4] font-medium text-2xl">
        Increment & Decrement
      </h1>
      <div className="bg-white flex justify-center  items-center gap-12 py-3 rounded-sm text-[25px]">
        <button onClick={decrementEvent} className="border-r-2 w-20 border-[#bfbfbf] text-5xl text-center"> - </button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button onClick={incrementEvent} className="border-l-2 w-20 border-[#bfbfbf] text-5xl text-center"> + </button>
      </div>
      <button  onClick={resetEvent} className="bg-[#0398d4] text-white px-5 py-2   rounded-sm text-lg">Reset</button>
    </div>
  );
};

export default App;
