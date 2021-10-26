import './App.scss';
import Exhibit from "./Components/Exhibit/Exhibit";
import React , { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./HelveticaNeueCyr/HelveticaNeueCyr.ttf";

function App() {
    /*
        "showNumber" hook we use to show <Exhibit /> Component 
        if showNumber is true that means we see animation on the screen
        if showNumber is false that means we see <Exhibit /> component 
        on the screen 
    */
    const [ showNumber , setShowNumber ] = useState(true)
    const [ Theme , setTheme] = useState(true) // for change Them 
    
    // for all page starting animation 3 , 2 , 1 go.....
    const count = useSpring({
        from: { number: 4 },
        to: { number: 0 },
        config: { 
            duration: 2000
        },
        /*
            after animation is finish then onRest props change 
            "showNumber" hook's state from true to false 
            which means we see <Exhibit /> component on the screen.
        */
        onRest: () => setShowNumber(!showNumber),
    })

    return (
        <div className={`App ${Theme ? "" : "BlackBackgroundColor"}`}>
            { 
            showNumber ? 
            <div className="number"> 
                <animated.p>
                { count.number.to(val => Math.floor(val)) }
                </animated.p>
                <small> This is <q>Reaction game</q> Clone </small>
            </div> 
            : 
            <Exhibit Theme = {Theme} setTheme={setTheme}/> 
            }
        </div>
    );

}

export default App;
