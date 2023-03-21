import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerState from './context/customers/CustomerState';
import Customer from './Components/CustomerDetails/Customer';

function App() {
  return (
    <>
      <CustomerState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customerdetails" element={< Customer/>} />
          </Routes>
        </BrowserRouter>
      </CustomerState>
    </>
  );
}

export default App;
