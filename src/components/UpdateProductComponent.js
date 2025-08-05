import React, { useState, useEffect } from 'react';
import ProductService from '../../src/services/ProductService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProductComponent = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        ProductService.getProductById(id).then((res) => {
            const product = res.data;
            setNome(product.nome);
            setDescricao(product.descricao);
            setPreco(product.preco);
        });
    }, [id]);

    const updateProduct = (e) => {
        e.preventDefault();
        const product = { nome, descricao, preco };
        ProductService.updateProduct(product, id).then(() => {
            navigate('/products');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Product</h3>
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
                                <button className="btn btn-success" onClick={updateProduct}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductComponent;