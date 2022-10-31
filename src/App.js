import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./components/User";
import "./App.css";
import Container from "./components/Container";

function App() {
  const [user, setUser] = useState("grumpy19");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Container />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
