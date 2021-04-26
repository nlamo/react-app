import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// **State**

// works the same as the App() function.. but why?
// the reason we want to use this because it gives us access to 'state' :
// some object, a JS object with properties, that we can access at any point inside of our class
// we do this using a constructor()

// **JSX**

// JSX attributes (e.g. className) are named so that they don't confilct with JS reserved words, uses camel case
// Curly brackets {} encapsulate JavaScript expressions
// this.setState - 'unidirectional data flow' in React - you're not allowed to modify state without calling this method setState

// every time .setState gets called then render() gets called with the new state being in effect

// **Single-page application**

// Instead of requesting a page, it becomes requesting for data
// JSON data can be converted into JavaScript objects that we can use
// The APIs are really just ways for use to access information so that we can access and manipulate it
// Very dynamic way of building appliactions, always communicating with outside servers

class App extends Component {
  constructor() {
    super();

    // we want initial state to be an empty array if we're making an API request to fetch and mount values to it
    this.state = {
      monsters: [ ]
    };
  }

  // **Life Cycle Methods**

  // Essentially methods that get called at different stages of when a particular component gets rendered

  // **Mounting** - componentDidMount()

  // When React puts our component on the page, renders it on to the DOM for the first time
  // Calling whatever block of code we write inside of the function

  // Make an API request to the URL and returns a promise, but the promise
  // gives us a response of the actual body of our actual response... (?)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  // Quote from course:

  // "A good rule of thumb as to when to use the key attribute you saw in the previous video, is this: 
  //  Anytime you use the map() function inside of render, or you have a list of the same jsx elements one 
  //  after another, they need a key attribute (and CRA will warn you about it if you miss it)"

  // **IDs**

  // React tells you to create a unique ID for each object if you haven't done so
  // The key tells React which element has been updated so that when a state change has been detected
  // it therefore knows exactly which elements to re-render so that it doesn't to re-render everything

  // **Components**

  // Built-in components are in camelCase
  // The components that *we* create are in PascalCase 
  // When we create the JSX component, we assign the properties ('props') beside it
  // Children are what we put between the brackets of the JSX object that gets called/created

  render() {
    return (
    <div className="App">
      <CardList monsters = {this.state.monsters} />
    </div>
    );
  }
}

export default App;
