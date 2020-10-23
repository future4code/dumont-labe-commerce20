import React from 'react';
import FiltroNumeroMin from './FiltroNumeroMin';
import FiltroNumeroMax from './FiltroNumeroMax';
import FiltroBusca from './FiltroBusca';
import './Filtro.css';

export class Filtro extends React.Component {
    render() {
        return (
            <div className={'filtro-container'}>
                <h2>Filtros:</h2>

                <div className={'filtro'}>
                    <FiltroNumeroMin 
                        filtro={"Valor Mínimo:"}
                        filtroNumeroMin={this.props.filtroNumeroMin}
                        onChangeFiltroNumeroMin={this.props.onChangeFiltroNumeroMin}
                    />
                    <FiltroNumeroMax 
                        filtro={"Valor Maximo:"}
                        filtroNumeroMax={this.props.filtroNumeroMax}
                        onChangeFiltroNumeroMax={this.props.onChangeFiltroNumeroMax}
                    />
                    <FiltroBusca 
                        filtro={"Buscar Produto"}
                        filtroBusca={this.props.filtroBusca}
                        onChangeFiltroBusca={this.props.onChangeFiltroBusca}
                    />
                </div>
            </div>
        );
    }
}

export default Filtro;