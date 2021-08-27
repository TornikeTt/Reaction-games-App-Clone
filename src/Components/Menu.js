import React from 'react';
import { useTransition , animated } from 'react-spring';
import { useState } from "react"
import { gameList } from "./gameList";
import Eachgame from "./Eachgame"
import Settings from "./Settings";

const Exhibit = () => { 
    const [ volume, setVolume ] = useState(true);
    const [ settingToggle, setSettingToggle ] = useState(false); 
    const [ difficultyValue , setDifficultyValue ] = useState(5)

    const Volume_Hendler = () => { 
        if( settingToggle === false ) { 
            setVolume(!volume)
        }
    }

    const Setting_Hendler = () => { 
        setSettingToggle(!settingToggle);
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
                    onClick = { Volume_Hendler }
                />
                <p> {settingToggle? "SETTINGS" : "MENU" } </p>

                <img 
                    src="icones/cog-solid.svg" 
                    alt="settings icone"
                    className="icone"
                    onClick = { Setting_Hendler }
                />
            </header>

            <div className="shape"> 
                { 
                    settingToggle ? 
                    <Settings 
                        difficultyValue = { difficultyValue } 
                        setDifficultyValue = { setDifficultyValue }
                    /> 
                    :
                    gameList.map( (eachData) => { 
                        return ( 
                            <Eachgame 
                                key={ eachData.id }
                                gameName = { eachData.gameName }
                                summary = { eachData.summary }
                            />
                        )
                    }) 
                }
            </div>

        </main>
    );
}


export default Exhibit
