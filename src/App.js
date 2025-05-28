import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListComponent from './components/ProductListComponent';
import AddProductComponent from './components/AddProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import UserListComponent from './components/UserListComponent';
import AddUserComponent from './components/AddUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import HomeComponent from './components/HomeComponent';



const App = () => {
  return (
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/products" element={<ProductListComponent />} />
            <Route path="/add-product" element={<AddProductComponent />} />
            <Route path="/update-product/:id" element={<UpdateProductComponent />} />
            <Route path="/users" element={<UserListComponent />} />
            <Route path="/add-user" element={<AddUserComponent />} />
            <Route path="/update-user/:id" element={<UpdateUserComponent />} />

          </Routes>
        </div>
      </Router>
  );
};

export default App;
