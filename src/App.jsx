import { useState } from "react";
import FormControlled from "./FormControlled";
import FormUncontrolled from "./FormUncontrolled";
import Test from "./Test";
import VanillaForm from "./VanillaForm";

function App() {
  const [count, setCount] = useState(0);
  function toggle() {
    setCount((old) => old + 1);
  }
  return (
    <div className="App">
      <VanillaForm />
      <FormControlled />
      <FormUncontrolled />
      {count % 2 === 1 && <Test />}
      <button onClick={toggle}>Click me</button>
    </div>
  );
}

export default App;
