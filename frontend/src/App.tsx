import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AddWallet from './pages/AddWallet';
import AllWallets from './pages/AllWallets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddWallet />} />
        <Route path="/all" element={<AllWallets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
