import './App.scss';
import Exhibit from "./Components/Exhibit/Exhibit";
import React , { useState } from "react"
import { useSpring, animated } from "react-spring"
import "./HelveticaNeueCyr/HelveticaNeueCyr.ttf";

function App() {
  const [ showNumber , setShowNumber ] = useState(true)
  const [ Theme , setTheme] = useState(true) // for chaneing Them 

  const count = useSpring({
    from: { number: 4 },
    to: { number: 0 },
    config: { 
      duration: 2000
    },
    onRest: () => setShowNumber(!showNumber),
  })

  return (
      <div className={`App ${Theme ? "" : "BlackBackgroundColor"}`}>
      { 
        showNumber ? 
          <div className="number"> 
            <animated.p>
            { count.number.interpolate(val => Math.floor(val)) }
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
