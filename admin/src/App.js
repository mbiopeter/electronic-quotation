import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { PrimeReactProvider } from 'primereact/api';
import Home from './views/pages/Home';
import UpBar from './views/components/upBar';
import Quotation from './views/pages/quotation';
import Login from './views/pages/Login';
import QuotationDetails from './views/pages/quotationDetails';
import EditItem from './views/pages/editItem';
import QuotationRecept from './views/pages/quotationRecept';
import Settings from './views/pages/settings';
import { jwtDecode } from "jwt-decode";
import EditQuotation from './views/pages/editQuotation';

function AppContent() {
  const location = useLocation();
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const showUpBar = !(location.pathname === '/login' || location.pathname.startsWith('/recept'));

  const logInStatus = () => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  };

  const handleTokenDecode = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setFullName(`${decodedToken.firstName} ${decodedToken.secondName}`);
      } catch (error) {
        localStorage.removeItem("token");
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  };

  const handleTokenExpiery = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("token");
          navigate('/login');
        } else {
          handleTokenDecode();
          logInStatus();
        }
      } catch (error) {
        console.error("Token decoding error", error);
        localStorage.removeItem("token");
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    handleTokenExpiery();
  }, []);

  return (
    <>
      {showUpBar && <UpBar fullName={fullName} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quotations" element={<Quotation />} />
        <Route path="/quotations/:id" element={<QuotationDetails />} />
        <Route path="/editItem/:id" element={<EditItem />} />
        <Route path="/recept/:id" element={<QuotationRecept />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/quoteEdit/:id" element={<EditQuotation />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <AppContent />
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
