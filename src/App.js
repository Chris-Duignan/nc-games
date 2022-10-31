import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./components/User";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState("grumpy19");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
