import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState(1);

  const handleInput = () => {
    if (input === 4) {
      setInput(1);
    } else {
      setInput(input + 1);
    }
  };



  let img = 1


  return (
    <div className="calculator">
    <img onClick={handleInput} className="peet" src={input + ".jpg"} alt="Girl in a jacket" />

    </div>
  );
}

export default Calculator;
