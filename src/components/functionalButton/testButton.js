import React from 'react';

export default function TestButton(props) {
    const {clickedIt, toggle} = props;
    return (
        <div>
        {!toggle ? 
            <button className="btn btn-danger" onClick={(clickedIt)}>Don't Press The Button!!!</button>
            :
            <button className="btn btn-success" onClick={clickedIt}>YOU BROKE IT!!!!!!</button>
        }
        </div>
    )
}