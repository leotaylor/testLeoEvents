import React from 'react';

export default function TestButton() {

    const clickedIt = () => {
        console.log('It Does NOTHING');
    }
    return (
        <button className="btn btn-danger" onClick={clickedIt}>Don't Press The Button</button>
    )
}