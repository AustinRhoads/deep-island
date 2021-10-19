import React, {useEffect} from 'react'

function Overworld(){

useEffect(() => {
    console.log("yoyoyoyo")
})

    return(
        <div id="game-container">
            <canvas className="game-canvas" style={{width: 198, height: 352}}></canvas>
        </div>
    )
};

export default Overworld;