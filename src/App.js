import React from 'react';
import './App.css';
// import Box from './component/Box'
import ChoiceCard from './component/ChoiceCard'

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

function App() {
    return ( 
    <div className="App"> 
      <ChoiceCard title="player" winner={false} imgURL={choices.rock}/>
      <ChoiceCard title="computer" winner={true} imgURL={choices.paper}/>
      {/* <ChoiceCard color="blue"/> */}
    </div>
    );
}

    export default App; 