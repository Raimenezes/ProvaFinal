import {Component} from "react";
import Header from "./Header";
import "./Home.css"
import Meio from "./Meio";


export default class Home extends Component{
    render() {
      return(
         <div class="estrutura">
             <Header/>
             <Meio/>
         </div>

      )
    }
}