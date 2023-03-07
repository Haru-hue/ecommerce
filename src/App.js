import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Components from "./pages/Components";
import Navbar from "./components/Navbar";
import Modal from "./pages/SignInModal";
import ProductPage from "./views/ProductPage";
import UserProfile from "./views/UserProfile";

// import "normalize.css";
import "./App.scss";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/user/login" element={<Modal />} exact />

          {/* Product routes */}
          <Route path="/products" element={<ProductPage />} exact />
          <Route path="/products" element={<ProductPage />} exact />
          <Route path="/profiles/:userId" element={<UserProfile />} exact />

          {/* Dummy route to showcase component */}
          <Route path="/components" element={<Components />} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
