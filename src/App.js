import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import TicTacToe from "./routes/TicTacToe";
import Navigation from "./components/Navigation";

function App() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <h3 className="mt-3 fw-bold text-center">Hello, React!</h3>
        <div className="d-flex justify-content-center my-4">
          <Navigation />
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/TicTacToe" component={TicTacToe} />
      </BrowserRouter>
    );
}

export default App;
