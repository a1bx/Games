import React from 'react';
import Home from './components/home';
import Nav from './components/nav';
// import About from './components/about';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home />
      {/* <About/> */}
    </div>
  );
}

export default App;



// import React, { Component } from "react";
// import {
// 	MemoryRouter as Router,
// 	Route,
// 	Link,
// 	Switch,
// } from "react-router-dom";
// import Home from "./components/home";
// import About from "./components/about";
// // import Contact from "./components/contact";

// class App extends Component {
// 	render() {
// 		return (
// 			<Router>
// 				<div className="App">
// 					<ul className="App-header">
// 						<li>
// 							<Link to="/">Home</Link>
// 						</li>
// 						<li>
// 							<Link to="/about">
// 								About Us
// 							</Link>
// 						</li>
// 						{/* <li>
// 							<Link to="/contact">
// 								Contact Us
// 							</Link>
// 						</li> */}
// 					</ul>
// 					<Switch>
// 						<Route
// 							exact
// 							path="/"
// 							component={Home}
// 						></Route>
// 						<Route
// 							exact
// 							path="/about"
// 							component={About}
// 						></Route>
// 						{/* <Route
// 							exact
// 							path="/contact"
// 							component={Contact}
// 						></Route> */}
// 					</Switch>
// 				</div>
// 			</Router>
// 		);
// 	}
// }

// export default App;
