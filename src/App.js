import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListComponent from './components/ProductListComponent'; // Seus componentes existentes
import AddProductComponent from './components/AddProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import UserListComponent from './components/UserListComponent';
import AddUserComponent from './components/AddUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import HomeComponent from './components/HomeComponent'; // Seu novo componente Home
import Navbar from './components/NavBar'; // Sua Navbar estilizada

import './App.css'; // Mantenha seu CSS global se tiver

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeComponent />} /> {/* Rota para a tela inicial */}
          <Route path="/products" element={
            <>
            <Navbar />
             <ProductListComponent />
          </>
           } />
          <Route path="/add-product" element={
            <>
            <Navbar />
          <AddProductComponent />
          </>
            } />
          <Route path="/update-product/:id" element={
            <>
            <Navbar />
            <UpdateProductComponent />
          </>
            } />
          <Route path="/users" element={
            <>
            <Navbar />
             <UserListComponent />
          </>
           } />
          <Route path="/add-user" element={
            <>
            <Navbar />
            <AddUserComponent />
          </>
            } />
          <Route path="/update-user/:id" element={
            <>
            <Navbar />
           <UpdateUserComponent />
          </>
            } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;