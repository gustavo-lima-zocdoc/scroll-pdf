import { data } from "./pdffile";

function App() {
  return (
    <div className="App">
      <iframe
        src={`${data}#page=2`}
        width="500px"
        height="500px"
        title="PDF File"
      />
    </div>
  );
}

export default App;
