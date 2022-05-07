import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/about/:id" element={<ProductDetails/>} /> */}
        <Route path="/notFound" element={<NotFound/>} />
        <Route path="*" element={<Navigate to={"/notFound"} replace/>} />
      </Routes>
    </div>
  );
}

export default App;
