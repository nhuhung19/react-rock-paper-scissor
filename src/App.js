import React, {useState} from 'react';
import './App.css';
// import Box from './component/Box'
import ChoiceCard from './components/ChoiceCard'
import ChoiceButtons from './components/ChoiceButtons'
import {getRoundOutcome, CHOICES} from './utils/index'


function App() {

    const [prompt, setGamePrompt] = useState("1 ,2 ,3 SHOOT!!!")
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [previousWinner, setPreviousWinner] = useState(null);
    const [gameHistory, setGameHistory] = useState([]);

    let onPlayerChoose = (playerChoice) => {
        const [result, compChoice] = getRoundOutcome(playerChoice)
        console.log('ressult:', result)
        console.log('compchoice:', compChoice)
        const newUserChoice = CHOICES[playerChoice];
        const newComputerChoice = CHOICES[compChoice];
        setPlayerChoice(newUserChoice);
        setComputerChoice(newComputerChoice)

        if (result === "Victory!") {
        setPreviousWinner("You");
        } else if (result === "Defeat!") {
        setPreviousWinner("Computer");
        } else {
        setPreviousWinner("Tie");
        }
        gameHistory.push(result);
        setGamePrompt(result);
        setGameHistory(gameHistory);
    }

    
    return ( 
    <div className="App">
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-8 themed-grid-col">
                    <ChoiceCard title="Computer" previousWinner={previousWinner} imgURL={computerChoice && computerChoice.url} />
                    <h1>{prompt}</h1>
                    <ChoiceButtons onPlayerChoose={onPlayerChoose} />
                    <ChoiceCard title="You" previousWinner={previousWinner} imgURL={playerChoice && playerChoice.url} />
                </div>
                <div className="col-md-4 themed-grid-col">
                    <h3>History</h3>
                    <ul>
                        {gameHistory.map((result, index) => {
                        return <li key={index}>{result}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    );
}

    export default App; 