import React, {useState, useEffect} from 'react';




function GamePad(){



    useEffect(() => {

        window.addEventListener("gamepadconnected", function(e) {
            console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
              e.gamepad.index, e.gamepad.id,
              e.gamepad.buttons.length, e.gamepad.axes.length);


              setGamepad(e.gamepad)
            
          });
         
    })

 

    return(
        <div>
            
        </div>
    )
};

export default GamePad;

