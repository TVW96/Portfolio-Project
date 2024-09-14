import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import BubbleMenu from './components/BubbleMenu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>App Page</h1>
        <BubbleMenu />
      </header>
    </div>
  );
}

export default App;
