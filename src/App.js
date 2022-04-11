import './App.css';
import Calculatorpart from './components/Calculatorpart.js';
import CurrencyConverter from './components/CurrencyConverter.js';


function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="cal-mainbox">
          <h2>Calculator</h2>
          <Calculatorpart />
          <CurrencyConverter/>
        </div>
      </div>
    </div>
  );
}

export default App;
