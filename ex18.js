import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  function Home() {
    return <h2>This is Home page</h2>;
  }

  function About() {
    return <h2> This is page About</h2>;
  }

  return (
    <Router>
      <header className="App-header">
        <h1>Welcome to react router</h1>
      </header>
      <div className="App">
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/about">About</Link>
        {"  "}
        <Link to="/contact">Contact</Link>
        {"  "}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" render={() => <h1>Contact address</h1>} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
