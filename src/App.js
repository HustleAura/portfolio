import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import ProjectSection from "./sections/projectSection";

function App() {
  return (
    <div className="App">
      <Button text="Google" hyperlink="https://www.google.com/"></Button>
      <ProjectSection></ProjectSection>
    </div>
  );
}

export default App;
