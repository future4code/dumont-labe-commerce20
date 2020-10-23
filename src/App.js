import React from 'react';
import logo from './logo.svg';
import './App.css';

import Filtro from './components/filtro/Filtro'
import Home from './components/home/Home'

class App extends React.Component {
  state = {
    filtroNumeroMin:'',
    filtroNumeroMax:'',
    filtroBusca:'',
  }
  
  onChangeFiltroBusca = (event) =>{
    this.setState({filtroBusca: event.target.value})
  }

  onChangeFiltroNumeroMin = (event) =>{
    this.setState({filtroNumeroMin: event.target.value})
  }

  onChangeFiltroNumeroMax = (event) =>{
    this.setState({filtroNumeroMax: event.target.value})
  }

  /*componentDidMount () {
    this.getFilteredAndOrderedList()
  }

  getFilteredAndOrderedList = () => {
    const filteredList = products
        .filter((products) => {
          if (this.state.filtroNumeroMax) {
            return(produto.preco <= Number(this.state.filtroNumeroMax))
          }else {
            return true
          }
        })
        
        .filter ((product) => {
          if (this.state.filtroNumeroMin) {
            return(product.preco) >= Number(this.state.filtroNumeroMin)
          }else {
            return true
          }
        })

        .filter ((product) => {
          if (this.state.filtroBusca) {
            return(product.titulo) >= Number(this.state.filtroBusca)
          }else {
            return true
          }
        })
  }*/

  render() {
    return (
      <div className="App">
        <div className="tela-inteira">
          <main>
            <section className="filtro">
              <Filtro
                filtroBusca={this.state.filtroBusca}
                onChangeFiltroBusca={this.onChangeFiltroBusca}
                
                filtroNumeroMin={this.state.filtroNumeroMin}
                onChangeFiltroNumeroMin={this.onChangeFiltroNumeroMin}
                
                filtroNumeroMax={this.state.filtroNumeroMax}
                onChangeFiltroNumeroMax={this.onChangeFiltroNumeroMax}
              />
            </section>

            <section className="carrinho">
                
            </section>
          </main>

          <Home 
            quantidadeDeProduto={"Quantidade de produtos: 8"}

            filtroBusca={this.state.filtroBusca}
            filtroNumeroMin={this.state.filtroNumeroMin}
            filtroNumeroMax={this.state.filtroNumeroMax}
          />
        </div>
      </div>
    );
  }
}

export default App;
