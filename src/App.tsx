import { InputTask } from "sections/input-task";

import "./App.css";
import { TimerInterval, TimerTimeout } from "sections/timer";

function App() {
  return (
    <div className="App">
      <InputTask />
      <TimerInterval />
      <TimerTimeout />
    </div>
  );
}

export default App;
