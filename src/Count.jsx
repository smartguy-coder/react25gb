const Count = ({ number }) => {
  return (
    <span className={`count ${number === 10 ? "count--limit" : ""}`}>
      {number}
    </span>
  );
};

export default Count;
