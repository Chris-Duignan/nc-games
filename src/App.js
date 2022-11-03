import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./components/User";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewContainer from "./components/ReviewContainer";
import SingleReview from "./components/SingleReview";
import Footer from "./components/Footer";
import ErrorContainer from "./components/ErrorContainer";

function App() {
  const [user, setUser] = useState("grumpy19");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="*" element={<ErrorContainer />} />
            <Route path="/" element={<ReviewContainer />} />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
