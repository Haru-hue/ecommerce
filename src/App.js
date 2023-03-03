import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} exact/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
