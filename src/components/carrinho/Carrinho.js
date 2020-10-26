import React from 'react'
import './Carrinho.css'

class Carrinho extends React.Component {
    state = {
        itemsCarrinho: []
    }
    removeItem = (index) => {
        const carrinhoAtualizado = this.props.produtos
        carrinhoAtualizado.splice(index,1)
        this.setState({itemsCarrinho: carrinhoAtualizado})
    }
    render(){
        var valorTotal = 0;
        var numeros = this.props.produtos;
        for ( var i = 0; i < numeros.length; i++ ){
            valorTotal += numeros[i].preco;
        }
    this.state.itemsCarrinho = this.props.produtos.map((item,index) => {
        return(
            <li className={'item-carrinho'}>
            <span> 1 </span>
            <p>{item.titulo}</p>
            <span className={'remove-item'} onClick={() =>
            this.removeItem(index)}> x </span>
            </li>
        )
    })
    return(
        <div className={this.props.showCart}>
            <h2>Carrinho: </h2>
            <ul>
            {this.state.itemsCarrinho}
            </ul>
            <p className='preco-total'>Total:
            <span>R${valorTotal}</span> </p>
        </div>
    )
    }
}
export default Carrinho