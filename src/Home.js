import {Component} from "react";
import Header from "./Header";
import "./Home.css"
import Meio from "./Meio";
import Compras from "./Compras"


export default class Home extends Component{
    render() {
      return(
         <div class="estrutura">
             <Header/>
             <Meio/>
             <Compras/>
         </div>

      )
    }
}