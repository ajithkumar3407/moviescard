// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Navber from './Navber';
import Move from './move';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Navber />
      <Content />
      <Move />
    </div>
  );
}

export default App;