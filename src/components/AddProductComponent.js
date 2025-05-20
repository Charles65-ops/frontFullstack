import React, { useState } from 'react';
import ProductService from '../ProductService';
import { useNavigate } from 'react-router-dom';

const AddProductComponent = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    const navigate = useNavigate();

    const saveProduct = (e) => {
        e.preventDefault();
        const product = { nome, descricao, preco };
        ProductService.createProduct(product).then(() => {
            navigate('/products');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Product</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Product Name: </label>
                                    <input placeholder="Name" name="name" className="form-control"
                                           value={nome} onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Product Description: </label>
                                    <input placeholder="Description" name="description" className="form-control"
                                           value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Product Price: </label>
                                    <input placeholder="Price" name="price" className="form-control"
                                           value={preco} onChange={(e) => setPreco(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveProduct}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductComponent;