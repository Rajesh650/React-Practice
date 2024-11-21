import React, {  useState } from "react";

function InputFields() {


  const [text,setText] = useState("")
  const [num,setnum] = useState("")
  function handleInput(event){
    setText(event.target.value)
  }
  // const inputRef = useRef(null);

  // function print() {
  //   if (inputRef.current) {
  //     console.log(inputRef.current.value); // Access the value of the input
  //   }
  // }

  return (
    <>
    <input type="text" onChange={handleInput} />
      {/* <input type="text" ref={inputRef} /> */}
      <button >Print</button>
      <h1>{text}</h1>
      <input type="number" onChange={(event)=>setnum(event.target.value)} />
      <h1>{num}</h1>
    </>
  );
}

export default InputFields;
