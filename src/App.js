
import './App.css';
import React from 'react';
import hunter_down_sheet from './images/hunter_down.png'
import bonsai from './images/bonsai_home_3.png'
import blooming from './images/bloominfukian.png'
import ar_logo_shine from './images/logo_shine_two_electric_boogaloo.png'


function App() {




function startBlooming(e){

  e.target.classList.add("blooming")

  setTimeout(()=>{
    
      if(!e.target.classList.contains("bloomed")){
        e.target.classList.add("bloomed")
      }

    }, 1000)
  
}

function randomShine(){
  setTimeout(()=>{
    let logo = document.getElementById('logo-shine-sheet');
    if(logo){
      logo.classList.add('shine');
      setTimeout(()=>{
          logo.classList.remove('shine');
          randomShine();
      }, 700)
    }
    
  }, Math.floor(Math.random() * (8000 - 900) + 900))


}
randomShine();



  return (
    <div className="App" >
      <div id="viewport">
        <img id="bonsai-img" className="pixelart" alt="" src={bonsai} />
        <div id="hunter">
            <img className="hd_sheet pixelart" alt="" src={hunter_down_sheet} />
        </div>

        <div id="fp-one" className="flowerpot " >
          <img className="bloomin_sheet pixelart bloomed" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-two" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-three" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-four" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-five" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-six" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-seven" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-eight" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-nine" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-ten" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>
 
        <div id="fp-eleven" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="fp-twelve" className="flowerpot " >
          <img className="bloomin_sheet pixelart" alt="" src = {blooming} onMouseEnter={(e)=> startBlooming(e)}/>
        </div>

        <div id="logo-shine">
          <img id="logo-shine-sheet" className="pixelart" alt="" src={ar_logo_shine} />
        </div>
  
      </div>
    </div>
  );
}

export default App;
