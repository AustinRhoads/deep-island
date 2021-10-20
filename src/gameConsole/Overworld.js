import React, { useEffect } from 'react'
import { GameLoop } from './GameLoop';


function Overworld(){

    useEffect(()=>{
        window.requestAnimationFrame(GameLoop)
    })


    return(
        <div id="game-container">
            <div id="blue-box" style={{width: 100, height: 100, backgroundColor: "blue", position: "absolute"}}></div>
             <canvas className="game-canvas" style={{width: 198, height: 352}}></canvas> 
        </div>
    )
};

export default Overworld;