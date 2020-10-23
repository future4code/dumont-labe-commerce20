import React from 'react';

import {ProdutosHome} from './ProdutosHome';
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
    getFilteredAndOrderedList = () => {
        return this.props.produtos
            .filter((produto) => produto.preco > this.props.filtroNumeroMin)
            .filter((produto) => produto.preco < this.props.filtroNumeroMax)
            .filter((produto) => produto.titulo.includes > this.props.filtroBusca)
    }

    render () {
    return ( 
        <div>
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
                    titulo={"Camisa gatinho fofo"}
                    preco={"R$25,50"}
                />
                <ProdutosHome
                    imagem={imagem2}
                    titulo={"Camisa "}
                    preco={"R$25,50"}
                />
                <ProdutosHome
                    imagem={imagem3}
                    titulo={"Camisa "}
                    preco={"R$25,50"}
                />
                <ProdutosHome
                    imagem={imagem4}
                    titulo={"Camisa "}
                    preco={"R$25,50"}
                />
                <ProdutosHome
                    imagem={imagem5}
                    titulo={"Camisa "}
                    preco={"R$25,50"}
                />
                <ProdutosHome
                    imagem={imagem6}
                    titulo={"Camisa "}
                    preco={"R$25,50"}
                />
                <ProdutosHome
                    imagem={imagem7}
                    titulo={"Camisa "}
                    preco={"R$25,50"}
                />
                <ProdutosHome
                    imagem={imagem8}
                    titulo={"Camisa "}
                    preco={"R$25,50"}
                />
            </main>
        </div>
    );
    }
}
      