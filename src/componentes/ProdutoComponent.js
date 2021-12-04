import React from "react";
import ProdutoService from "../services/ProdutoService";
import sfoto from "../img/sfoto.jpg";

class UserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {

        ProdutoService.getProducts().then((res => {
            this.setState({products: res})
        }));
    }

    render(){
        return(
            this.state.products.map(
                product =>

                          <div className="Products">
                                <div className="item_compra">
                                    <img src={product.image} />
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <s>de R${product.oldPrice},00</s>
                                    <h2>Por: R${product.price},99</h2>
                                    <p>ou 2x de R$9,99</p>
                                    <button className="button2">Comprar</button>
                                </div>

                          </div>

            )
        )
    }
}

export default UserComponent;
