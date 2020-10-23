import React from 'react';
import './FiltroBN.css';

export default function FiltroNumeroMax(props) {
    return(
        <div>
            <p>{props.filtro}</p>
            <input type="number"  onChange={props.onChangeFiltroNumeroMax} value={props.filtroNumeroMax}/>
        </div>
    );
}