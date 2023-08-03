import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <div>
      <h1 id="intro">
        <span>SUCCESS &nbsp;</span>
        <span>IS &nbsp;</span>
        <span>NOT &nbsp;</span>
        <span>FOR &nbsp;</span>
        <span>THE &nbsp;</span>
        <span>LAZY</span>
      </h1>
      </div>
      <TodoWrapper/>
    </div>
  );
}

export default App;
