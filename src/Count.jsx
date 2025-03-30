import { useEffect } from "react";

const Count = ({ number }) => {
  useEffect(() => {
    document.title = `You clicked ${number} times`;
    return () => {
      document.title = "React App";
    };
  }, [number]);

  return <span>{number}</span>;
};

export default Count;
