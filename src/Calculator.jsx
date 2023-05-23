import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operations = ["/", "*", "-", "+", "."];

function Calculator() {
  const [calculation, setCalculation] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useState("");

  const updateCalculation = (value) => {
    if (
      (operations.includes(value) && calculation === "") ||
      (operations.includes(value) && operations.includes(calculation.slice(-1)))
    ) {
      return;
    }

    setCalculation(calculation + value);

    if (!operations.includes(value)) {
      setResult(eval(calculation + value).toString());
    }
  };

  const calculate = () => {
    setCalculation(eval(calculation).toString());
  };

  const deleteLastValue = () => {
    const value = calculation.slice(0, -1);

    setCalculation(value);
    setResult(eval(value).toString());
  };

  return (
    <div className="calculator">
      <div className="cal-display-container">
        {calculation ? calculation : 0}
      </div>

      <div className="digits-container">
        {numbers.map((el) => (
          <button onClick={() => updateCalculation(el.toString())} key={el}>
            {el}
          </button>
        ))}
        <button onClick={() => updateCalculation("0")}>0</button>
        <button onClick={() => updateCalculation(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>

      <div className="operators-container">
        <button onClick={() => updateCalculation("/")}>/</button>
        <button onClick={() => updateCalculation("*")}>x</button>
        <button onClick={() => updateCalculation("-")}>-</button>
        <button onClick={() => updateCalculation("+")}>+</button>
        <button onClick={deleteLastValue}>DEL</button>
      </div>
    </div>
  );
}

export default Calculator;
