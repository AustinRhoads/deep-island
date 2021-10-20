import React from 'react' 

export const GameLoop = (callback) => {

    let box = document.getElementById("blue-box");

    let box_x_position = box.offsetLeft;
    let box_y_position = box.offsetTop;

    window.addEventListener("keydown", (e)=>{
        switch(e.key){
            case "ArrowRight":
                
                box_x_position += 10;
                box.style.left = box_x_position + "px"; 
            break;
            case "ArrowLeft":
                
                box_x_position -= 10;
                box.style.left = box_x_position + "px"; 
            break;
            case "ArrowUp":
                
                box_y_position -= 10;
                box.style.top = box_y_position + "px"; 
            break;
            case "ArrowDown":
                
                box_y_position += 10;
                box.style.top = box_y_position + "px"; 
            break;
            
        }
    })

    

    window.requestAnimationFrame(GameLoop)
}