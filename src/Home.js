import {Component} from "react";
import Header from "./Header";
import "./Home.css"
import Meio from "./Meio";
import Compras from "./Compras"
import Footer from "./footer";
import ProdutoComponent from "./componentes/ProdutoComponent";


export default class Home extends Component{
    render() {
      return(

         <div class="estrutura">
             <Header/>
             <Meio/>
             <main className="compra">
                 <ProdutoComponent/>
             </main>
             <div className="teste">
                <Footer/>
             </div>
         </div>

      )
    }
}