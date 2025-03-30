import Count from "./Count";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {number < 3 ? <Count number={number} /> : null}
      <Button setNumber={setNumber} />
    </div>
  );
}

export default App;
