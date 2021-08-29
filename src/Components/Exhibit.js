import React from 'react';
import { useSpring, animated } from 'react-spring'
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


    const left_icone_hendler = () => { 

        if( GameIdentification > 0 ) { 
            // if we click any game
            return "icones/times-solid.svg"
        }

        if( settingToggle ) { 
            //inside setting 
            return "icones/times-solid.svg"
        } else if( settingToggle === false ) { 
            //inside Menu
            if( volume ) { 
                return "icones/volume-up-solid.svg" 
            } else { 
                return  "icones/volume-mute-solid.svg"
            }
        }

    }

    const x = () => { 
        // when we be in a game and click X icone it's go back to the menu
        setGameIdentification(0)        
    }
    

    return ( 
        <main>
            <header>
                <img
                    src = {
                        left_icone_hendler()
                    }
                    alt="Speakers icone" 
                    className="icone"
                    onClick = { 
                        GameIdentification > 0 ? x :
                        settingToggle ? Setting_Hendler : Volume_Hendler 
                    }
                />

                <p> { Header_Name_Hendler() } </p>
                { /* show only then when user click one of them games */ }
                { GameIdentification > 0 && <p> 1  / {difficultyValue} </p> }

                { /*  here onClick string has string which
                    gave us error change another time  */ }
                <img 
                    src={ GameIdentification > 0 ? 
                            "icones/sync-alt-solid.svg" :
                            "icones/cog-solid.svg" }
                    alt="settings icone"
                    className="icone"
                    onClick = { GameIdentification > 0 ? "us" : Setting_Hendler }
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
