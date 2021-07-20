import './App.css';
import bell from './bell.svg';
import logo from './Logo.svg';

function App() {
  return (
    <div id="App" className="bg-white">
      <nav className="flex w-full bg-white justify-between items-center p-4">
        <img src={logo}></img>
        <div className="flex justify-center w-max">
          <img className="h-6 w-auto" src={bell}></img>
          <h3 className="px-2">Jessica James</h3>
        </div>
      </nav>
    </div>
  );
}

export default App;
