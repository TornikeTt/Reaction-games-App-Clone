import React from "react";
import {useState} from "react"

const ColorChangeGame = () => { 
    const [ Starting_ColorChange , setStarting_ColorChange ] = useState(false)

    const startGame_ColorChange = () => { 
        setStarting_ColorChange(true);
    }

    if (  Starting_ColorChange === false ) { 
        return ( 
            <div className="ColorChange_Game">
                <div className="HowToPlye">
                    <p>click on the frame as soon as the color 
                        changes, as soon as possible </p>
                </div>

                <div className="start_game" onClick={startGame_ColorChange}>
                    <p> start </p>
                </div>
            </div>
        )
    }  else { 
        return ( 
            <div>
                hello
            </div>
        )
    } 
    
}


export default ColorChangeGame
