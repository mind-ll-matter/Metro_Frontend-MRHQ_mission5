import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchListings from "./pages/SearchListings";
import IndividualListing from "./pages/IndividualListing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/" element={<SearchListings />} />
        <Route path="/listing/" element={<IndividualListing />} />
      </Routes>
    </div>
  );
}

export default App;
