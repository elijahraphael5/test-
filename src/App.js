import './App.css';
import Header from './Header'

let name = 'Raphael'

function App() {
  return (
    <div className="App">
     <Header name={name}/>
    </div>
  );
}

export default App;
