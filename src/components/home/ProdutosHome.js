import React from 'react';

export function ProdutosHome(props){
    return ( 
        <div className="media-box">
            
            <a href="#">
                <img src={props.imagem} alt=""/>
                <div className="titulo">{props.titulo}</div>
                <div className="preco">{props.preco}</div>
                <button className="botao" type="submit" >Adicionar ao Carrinho</button>
            </a>
        </div>
    );
}

export default ProdutosHome;