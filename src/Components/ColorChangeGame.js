import React from "react";
import {useState} from "react"

const ColorChangeGame = () => { 
    const [ Starting_ColorChange , setStarting_ColorChange ] = useState(false)

    const startGame_ColorChange_Hendler = () => { 
        setStarting_ColorChange(true);
    }

    return ( 
        <div className="ColorChange_Game">
            <div className="HowToPlye">
                <p>click on the frame as soon as the color 
                    changes, as soon as possible </p>
            </div>

            <div 
                className="start_game" 
                onClick={startGame_ColorChange_Hendler} >
                { 
                    Starting_ColorChange ? 
                        <div> game is starting </div>
                    :
                        <p> start </p> 
                }
            </div>

        </div>
    )
    
}


export default ColorChangeGame
