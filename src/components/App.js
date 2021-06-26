import "../css/App.css";
import Lava from "./Lava";
import Toggle from "./Toggle";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="head">Lava Lamp</h1>
        <Toggle />
        <Lava type="lava lava-medium or" />
        <Lava type="lava lava-small oy" />
        <Lava type="lava lava-horiz ry" />
      </header>
    </div>
  );
}

export default App;
