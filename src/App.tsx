import "./App.css";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    </>
  );
}

export default App;
