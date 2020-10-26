import React from 'react';

import {ProdutosHome} from './ProdutosHome';
import Carrinho from '../carrinho/Carrinho';
import BotaoCarrinho from './BotaoCarrinho';
import iconCart from './img/shoppingCart.png';
import imagem1 from './img/camiseta1.JPG';
import imagem2 from './img/camiseta2.JPG';
import imagem3 from './img/camiseta3.JPG';
import imagem4 from './img/camiseta4.JPG';
import imagem5 from './img/camiseta5.JPG';
import imagem6 from './img/camiseta6.JPG';
import imagem7 from './img/camiseta7.JPG';
import imagem8 from './img/camiseta8.JPG';
import './Home.css';

export default class Home extends React.Component{
    state = {
        listaProdutos: [],
        openCart:false,
        showCart:'hiddenCart'
    }
    nomeDoProduto = ''
    precoDoProduto = 0
    idDoProduto = 0
    addCarrinho = (event) => {
        switch(event.target.name){
            case '1':
            this.nomeDoProduto = 'Camisa gatinho fofo'
            this.precoDoProduto = 25.50
            break;
            case '2':
            this.nomeDoProduto = 'Camisa Lhama e gatinho'
            this.precoDoProduto = 28.50
            break;
            case '3':
            this.nomeDoProduto = 'Camisa Lhama e gatinho 2'
            this.precoDoProduto = 28.50
            break;
            case '4':
            this.nomeDoProduto = 'Camisa gatinho lunatico '
            this.precoDoProduto = 26.50
            break;
            case '5':
            this.nomeDoProduto = 'Camisa gatinho e cachimbo'
            this.precoDoProduto = 26.50
            break;
            case '6':
            this.nomeDoProduto = 'Camisa gatinho preto'
            this.precoDoProduto = 25.50
            break;
            case '7':
            this.nomeDoProduto = 'Camisa gatinho irado'
            this.precoDoProduto = 26.50
            break;
            case '8':
            this.nomeDoProduto = 'Camisa gatinho de oculos'
            this.precoDoProduto = 25.50
            break;
        }
        this.idDoProduto++
        this.state.listaProdutos.push({
            key: this.idDoProduto,
            titulo: this.nomeDoProduto,
            preco: this.precoDoProduto
        })
    }
    openCart = () => {
        if(this.state.openCart === false){
            this.setState({showCart:'showCart' })
            this.setState({openCart:true})
        }else{
            this.setState({showCart: 'hiddenCart' })
            this.setState({openCart:false})
        }
    }
        
    
    getFilteredAndOrderedList = () => {
        return this.props.produtos
            .filter((produto) => produto.preco > this.props.filtroNumeroMin)
            .filter((produto) => produto.preco < this.props.filtroNumeroMax)
            .filter((produto) => produto.titulo.includes > this.props.filtroBusca)
    }

    render () {
    return ( 
        <div>
            <BotaoCarrinho
                iconCart={iconCart}
                openCart={this.openCart}
            />
            <Carrinho
                showCart={this.state.showCart}
                produtos={this.state.listaProdutos}
            />

            <header className="header">
                <p>{this.props.quantidadeDeProduto}</p>

                <select>
                    <option>Preço: Crescente</option>
                    <option>Preço: Decrescente</option>
                </select>
                
            </header>

            <main className="produtos">
                <ProdutosHome
                    imagem={imagem1}
                    titulo={"Camisa gatinho fofo"}//Valores passados no switch case
                    preco={"R$25,50"} //Valores passados no switch case
                    addCarrinho={this.addCarrinho}
                    id={'1'}
                />
                <ProdutosHome
                    imagem={imagem2}
                    titulo={"Camisa Lhama e gatinho"}
                    preco={"R$28,50"}
                    addCarrinho={this.addCarrinho}
                    id={'2'}
                />
                <ProdutosHome
                    imagem={imagem3}
                    titulo={"Camisa Lhama e gatinho 2"}
                    preco={"R$28,50"}
                    addCarrinho={this.addCarrinho}
                    id={'3'}
                />
                <ProdutosHome
                    imagem={imagem4}
                    titulo={"Camisa gatinho lunatico "}
                    preco={"R$26,50"}
                    addCarrinho={this.addCarrinho}
                    id={'4'}
                />
                <ProdutosHome
                    imagem={imagem5}
                    titulo={"Camisa gatinho e cachimbo "}
                    preco={"R$26,50"}
                    addCarrinho={this.addCarrinho}
                    id={'5'}
                />
                <ProdutosHome
                    imagem={imagem6}
                    titulo={"Camisa gatinho preto "}
                    preco={"R$25,50"}
                    addCarrinho={this.addCarrinho}
                    id={'6'}
                />
                <ProdutosHome
                    imagem={imagem7}
                    titulo={"Camisa gatinho irado"}
                    preco={"R$26,50"}
                    addCarrinho={this.addCarrinho}
                    id={'7'}
                />
                <ProdutosHome
                    imagem={imagem8}
                    titulo={"Camisa gatinho de oculos"}
                    preco={"R$25,50"}
                    addCarrinho={this.addCarrinho}
                    id={'8'}
                />
            </main>
        </div>
    );
    }
}
      