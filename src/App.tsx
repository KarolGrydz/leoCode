import { useEffect, useContext } from "react";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { SearchList } from "./components/SearchList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchInput />
      <SearchList />
    </div>
  );
}

export default App;
