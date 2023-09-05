import User from './components/User/User';
import './App.css';

function App() {
  const a = 10;
  return (
    <div className="App-header">
      <h1>Hola mundo: {a}</h1>
      <User Nombre="Pablo" />
    </div>
  );
}

export default App;
