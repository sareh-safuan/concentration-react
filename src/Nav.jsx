import React from 'react'

const Sidenav = function ({ gameStart }) {
    return (
        <div className="nav">
            <button onClick={gameStart} >Start</button>
        </div>
    )
}

export default Sidenav