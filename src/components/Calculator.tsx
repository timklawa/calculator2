import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value: string) => {
    setInput(prev => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded shadow-md w-64">
      <input
        type="text"
        value={input}
        readOnly
        className="mb-4 p-2 border rounded w-full text-right"
      />
      <div className="grid grid-cols-4 gap-2 w-full">
        <button onClick={() => handleButtonClick('1')} className="p-2 border rounded bg-blue-500 text-white">1</button>
        <button onClick={() => handleButtonClick('2')} className="p-2 border rounded bg-blue-500 text-white">2</button>
        <button onClick={() => handleButtonClick('3')} className="p-2 border rounded bg-blue-500 text-white">3</button>
        <button onClick={() => handleButtonClick('+')} className="p-2 border rounded bg-blue-500 text-white">+</button>
        <button onClick={() => handleButtonClick('4')} className="p-2 border rounded bg-blue-500 text-white">4</button>
        <button onClick={() => handleButtonClick('5')} className="p-2 border rounded bg-blue-500 text-white">5</button>
        <button onClick={() => handleButtonClick('6')} className="p-2 border rounded bg-blue-500 text-white">6</button>
        <button onClick={() => handleButtonClick('-')} className="p-2 border rounded bg-blue-500 text-white">-</button>
        <button onClick={() => handleButtonClick('7')} className="p-2 border rounded bg-blue-500 text-white">7</button>
        <button onClick={() => handleButtonClick('8')} className="p-2 border rounded bg-blue-500 text-white">8</button>
        <button onClick={() => handleButtonClick('9')} className="p-2 border rounded bg-blue-500 text-white">9</button>
        <button onClick={() => handleButtonClick('*')} className="p-2 border rounded bg-blue-500 text-white">*</button>
        <button onClick={() => handleButtonClick('0')} className="p-2 border rounded bg-blue-500 text-white">0</button>
        <button onClick={() => handleButtonClick('/')} className="p-2 border rounded bg-blue-500 text-white">/</button>
        <button onClick={calculateResult} className="col-span-2 p-2 border rounded bg-green-500 text-white">=</button>
        <button onClick={() => setInput('')} className="p-2 border rounded bg-red-500 text-white">C</button>
      </div>
    </div>
  );
};

export default Calculator;
