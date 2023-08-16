import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu selected="Home"/>
      <Main />
    </div>
  );
}

export default App;
