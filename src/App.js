import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/LoginRegister/Login';
import BookTable from './pages/BookTable/BookTable';
import Register from './pages/LoginRegister/Register';
import Provider from './Context';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book_table" element={<BookTable />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;