import React, { useState, useEffect } from 'react';
import ProductService from '../../src/services/ProductService';
import { Link } from 'react-router-dom';

const ProductListComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Product List</h2>
            <div className="row">
                <Link to="/add-product" className="btn btn-primary">Add Product</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.nome}</td>
                            <td>{product.descricao}</td>
                            <td>{product.preco}</td>
                            <td>
                                <Link to={`/update-product/${product.id}`} className="btn btn-info">Update</Link>
                                <button className="btn btn-danger" onClick={() => ProductService.deleteProduct(product.id).then(() => setProducts(products.filter(p => p.id !== product.id)))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductListComponent;