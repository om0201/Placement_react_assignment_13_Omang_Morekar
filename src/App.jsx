import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Calculator</h1>
      <div className="calc-wrapper">
        <Calculator />
      </div>
    </>
  );
}

export default App;
