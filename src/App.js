import "./App.css";
import AppRouter from "./Components/AppRouter";
import Context from "./Components/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <AppRouter />
      </div>
    </Context>
  );
}

export default App;
