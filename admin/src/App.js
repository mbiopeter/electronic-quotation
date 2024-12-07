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


function AppContent() {
  const location = useLocation();

  const showUpBar = !(location.pathname === '/login' || location.pathname.startsWith('/recept'));

  return (
    <>
      {showUpBar && <UpBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quotations" element={<Quotation />} />
        <Route path="/quotations/:id" element={<QuotationDetails />} />
        <Route path="/editItem/:id" element={<EditItem />} />
        <Route path="/recept/:id" element={<QuotationRecept />} />
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
