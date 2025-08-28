import axios from 'axios';

const PRODUCT_API_BASE_URL = 'http://localhost:8080/produtos';


class ProductService {
    getProducts() {
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProductById(productId) {
        return axios.get(`${PRODUCT_API_BASE_URL}/${productId}`);
    }

    updateProduct(product, productId) {
        console.log("produto id:" + productId);
        return axios.put(`${PRODUCT_API_BASE_URL}/${productId}`, product);
    }

    deleteProduct(productId) {
        return axios.delete(`${PRODUCT_API_BASE_URL}/${productId}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();