import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./components/User";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewContainer from "./components/ReviewContainer";
import CategoryContainer from "./components/CategoryContainer";
import SingleReviewContainer from "./components/SingleReviewContainer";
import Footer from "./components/Footer";
import ErrorContainer from "./components/ErrorContainer";
import ReviewCategoryContainer from "./components/ReviewCategoryContainer";
import LandingPage from "./components/LandingPage";

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
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/reviews" element={<ReviewContainer />} />
            <Route path="/categories" element={<CategoryContainer />} />
            <Route
              path="/categories/:slug"
              element={<ReviewCategoryContainer />}
            />
            <Route
              path="/reviews/:review_id"
              element={<SingleReviewContainer />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
