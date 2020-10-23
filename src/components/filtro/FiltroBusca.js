import React from 'react';
import './FiltroBN.css';

export default function FiltroBusca(props) {
    return(
        <div className={'filtro'}>
            <p>{props.filtro}</p>
            <input onChange={props.onChangeFiltroBusca} value={props.filtroBusca}/>
        </div>
    );
}