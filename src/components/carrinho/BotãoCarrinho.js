import React from 'react'
import './Home.css'

export default class BotaoCarrinho extends React.Component{
    render(){
        return(
            <div className="botao-carrinho"
            onClick={this.props.openCart}>
                <img src={this.props.iconCart}/>
            </div>
        )
    }
}