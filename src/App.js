import "./App.css";
import Main from "./Pages/Main";
import Blog from "./Pages/Blog";
import Transaction from "./Pages/Transaction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
