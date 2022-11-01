import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./components/User";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewList from "./components/ReviewList";
import CategoryList from "./components/CategoryList";
import SingleReview from "./components/SingleReview";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState("grumpy19");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<ReviewList/>} />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
            <Route path="/categories/:slug" element={<CategoryList />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
