import { useState } from "react";
import { Assortment } from "sections/assortment";
import { Search } from "sections/search";
import { Counter } from "sections/counter-memo/counter";
import { ThemeButton } from "components/theme-button/theme-button";
import { ThemeProvider } from "providers/theme-provider";

import "./App.css";

function App() {
  return (
    // Usage of provider
    <ThemeProvider>
      <div className="App">
        <ThemeButton />
        <Counter />
        <Search />
        <Assortment />
      </div>
    </ThemeProvider>
  );
}

export default App;
