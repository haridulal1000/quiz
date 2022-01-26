import logo from "./logo.svg";
import "./App.css";
import InGame from "./components/inGame/inGame";
import Beginning from "./components/beginning/beginning";
import End from "./components/end/end";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [loggedIn,setLoggedIn]=useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/end"
            exact
            element={<End score={score} setScore={setScore} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}
          />
          <Route
            path="/inGame"
            exact
            element={<InGame score={score} setScore={setScore} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/" exact element={<Beginning loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
