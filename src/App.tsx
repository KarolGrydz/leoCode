import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { SearchList } from "./components/SearchList";
import { UserContextController } from "./context/UserContext";

import "./App.css";

function App() {
  return (
    <UserContextController>
      <div className="App">
        <Header />
        <SearchInput />
        <SearchList />
      </div>
    </UserContextController>
  );
}

export default App;
