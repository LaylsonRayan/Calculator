import React, { useState } from 'react';

const Home: React.FC = () => {
  const [result, setResult] = useState<number | string>(0);
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    const calculatedResult = eval(input);
    setResult(calculatedResult);
    setInput('');
  };

  const handleClear = () => {
    setResult(0);
    setInput('');
  };

  return (
    <main>
    <div className="grid grid-cols-4 gap-10 max-w-400 mx-auto p-20 bg-gray-200 rounded-lg">
      <div className="col-span-4 flex flex-col items-end mb-10">
        <input type="text" className="w-full px-10 py-4 text-lg" readOnly value={input} />
        <div className="text-2xl font-bold">{result}</div>
      </div>
      <div className="col-span-4 grid grid-cols-4 gap-10">
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('7')}>7</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('8')}>8</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('9')}>9</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('+')}>+</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('4')}>4</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('5')}>5</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('6')}>6</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('-')}>-</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('1')}>1</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('2')}>2</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('3')}>3</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('*')}>*</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('0')}>0</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('.')}>.</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleCalculate()}>=</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleButtonClick('/')}>/</button>
        <button className="col-span-2 px-10 py-4 text-lg text-center bg-white rounded-lg" onClick={() => handleClear()}>C</button>
      </div>
    </div>
      <footer className="bg-black">
        test
      </footer>
    </main>
  );
};

export default Home;