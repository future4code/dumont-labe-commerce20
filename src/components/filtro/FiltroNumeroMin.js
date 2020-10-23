import React from 'react';
import './FiltroBN.css';

export default function FiltroNumeroMin(props) {
    return(   
        <div className="filtro">
            <p>{props.filtro}</p>
            <input type="number" onChange={props.onChangeFiltroNumeroMin} value={props.filtroNumeroMin}/>
        </div>
    );
} 
