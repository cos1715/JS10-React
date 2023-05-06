import { AgeProvider } from "providers/age";
import { InputTask } from "sections/input-task";
import { ContextTabs } from "sections/context-tabs";
import { Forms } from "sections/forms";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AgeProvider>
        <InputTask />
        <ContextTabs />
        <Forms />
      </AgeProvider>
    </div>
  );
}

export default App;
