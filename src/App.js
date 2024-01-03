import logo from './logo.svg';
import './App.css';
import Provider from './Provider';
import InComponent from './InComponent';

function App() {
  return (
    <div className="App">
      <Provider>
        <InComponent />
      </Provider>
    </div>
  );
}



export default App;
