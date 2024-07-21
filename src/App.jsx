import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Restaurants from "./components/Restaurants";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Download from "./components/Download";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const items = [
  { id: 1, nam: "home", tag: "/" },
  { id: 2, nam: "restaurants", tag: "/restaurants" },
  { id: 3, nam: "features", tag: "/features" },
  { id: 4, nam: "testimonials", tag: "/testimonials" },
  { id: 5, nam: "download", tag: "/download" },
];
function App() {
  return (
    <Router>
      <Header items={items} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/download" element={<Download items={items} />} />
      </Routes>
    </Router>
  );
}

export default App;
