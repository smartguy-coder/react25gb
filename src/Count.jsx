import { useState } from "react";

const Count = () => {
  const [number, setNumber] = useState(0);
  return <span onClick={() => setNumber(number + 1)}>{number}</span>;
};

export default Count;
