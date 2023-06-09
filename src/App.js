// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchListings from "./pages/SearchListings";
import IndividualListing from "./pages/IndividualListing";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/" element={<SearchListings />} />
        <Route path="/search/listing/:id" element={<IndividualListing />} />
      </Routes>
    </div>
  );
}

export default App;
