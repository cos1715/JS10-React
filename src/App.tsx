import { AgeProvider } from "providers/age";
import { InputTask } from "sections/input-task";
import { ContextTabs } from "sections/context-tabs";
// import { Forms } from "sections/forms";
import { FormikForm } from "sections/formik";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AgeProvider>
        <InputTask />
        <ContextTabs />
        {/* <Forms /> */}
        <FormikForm />
      </AgeProvider>
    </div>
  );
}

export default App;
