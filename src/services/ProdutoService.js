const USERS_REST_API_URL = 'http://localhost:8080/produto';

class ProdutoService{
    getProducts(){
        return fetch(USERS_REST_API_URL).then((res => res.json()));
    }
}

export default new ProdutoService();