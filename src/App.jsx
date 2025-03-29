import Count from "./Count";
import Button from "./Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Count></Count>
      <Button></Button>
    </div>
  );
}

export default App;
