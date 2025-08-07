import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import GoodBye from './GoodBye';


function App() {
  return (
    <div className="App">
      <Hello/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this is my react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GoodBye/>
      </header>
      
    </div>
  );
}

export default App;
