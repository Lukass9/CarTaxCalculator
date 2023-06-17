import { Route, Routes } from "react-router-dom";
import TaxCalculator from "./pages/TaxCalculator";
import Tax from "./pages/Tax";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<TaxCalculator />} />
        <Route path='/tax' element={<Tax />} />
      </Routes>
    </div>
  );
}

export default App;
