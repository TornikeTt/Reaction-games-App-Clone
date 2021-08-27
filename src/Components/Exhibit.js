import React from 'react';
import { useTransition , animated } from 'react-spring';
import { useState } from "react"
import WhatShowYou from "./WhatShowYou"

const Exhibit = () => { 
    const [ volume, setVolume ] = useState(true);
    const [ settingToggle, setSettingToggle ] = useState(false); 
    const [ difficultyValue , setDifficultyValue ] = useState(5);
    const [ GameIdentification, setGameIdentification ] = useState(0)

    const Volume_Hendler = () => { 
        setVolume(!volume)
    }

    const Setting_Hendler = () => { 
        setSettingToggle(!settingToggle);
        if( GameIdentification > 0) { 
            setGameIdentification(0)    
        }
    }

    const Header_Name_Hendler = () => { 
        if ( settingToggle === true && GameIdentification === 0) { 
            return "SETTINGS"
        } else if ( settingToggle === false && GameIdentification === 0 ) { 
            return "MENU"
        } else if ( GameIdentification > 0) { 

            switch(GameIdentification) { 
                case 1: 
                    return "COLOR CHANGE"
                    break;
                case 2: 
                    return "FIND NUMBER"
                    break;
                case 3: 
                    return "CATCH THE BALL"
                    break;
                case 4: 
                    return "FIND COLOR"
                    break;
                default: 
                    return "COMING SOON..."
            };

        }
    }
    

    return ( 
        <main>
            <header>
                <img
                    src = {
                        settingToggle ? 
                            "icones/times-solid.svg"
                            :
                        volume ? 
                            "icones/volume-up-solid.svg" :
                            "icones/volume-mute-solid.svg"
                    }
                    alt="Speakers icone" 
                    className="icone"
                    onClick = { 
                        settingToggle ? Setting_Hendler : Volume_Hendler 
                    }
                />

                <p> { Header_Name_Hendler() } </p>

                <img 
                    src="icones/cog-solid.svg" 
                    alt="settings icone"
                    className="icone"
                    onClick = { Setting_Hendler }
                />
            </header>

            <div className="shape"> 
                <WhatShowYou 
                   settingToggle = { settingToggle }
                   difficultyValue = { difficultyValue } 
                   setDifficultyValue = { setDifficultyValue }
                   GameIdentification = { GameIdentification }
                   setGameIdentification = { setGameIdentification }
                />
            </div>

        </main>
    );
}


export default Exhibit
