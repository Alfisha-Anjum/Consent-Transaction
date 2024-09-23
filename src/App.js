import "./App.css";
import Main from "./Pages/Main";
import Transaction from "./Pages/Transaction";
import Blog from "./Pages/Blog";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    
    <div> 
      <Main/>
      <Blog/>
      <Transaction/>
    </div>
  );
}

export default App;
