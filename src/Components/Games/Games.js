import React from "react";
import {useState} from "react"
import { gameListData } from "../gameListData"

// each games 
import ColorChange from "./ColorChange/ColorChange"

const Games = (props) => { 
    const { 
        PageIdentification,
        Theme,
        eachLevel,
        setEachLevel,
        difficultyValue,
        setPageIdentification,
        timeTrack,
        setTimeTrack,
    } = props

    /* 
        The "start" hook we use when user first see START text and click it 
        before user click start text The "start" hook is false 
        after user click start text then "start" hook is True 
    */
    const [ start , setStart ] = useState(false)

    const Starting_Game_Hendler = () => { 
        if( start ) { 
            // we are here after user click START text
            let games = () => { 
                switch(PageIdentification) { 
                    case 1:
                        return ( 
                            <ColorChange 
                                eachLevel = {eachLevel}
                                setEachLevel = {setEachLevel}
                                Theme = { Theme }
                                difficultyValue = {difficultyValue}
                                setPageIdentification = {setPageIdentification}
                                timeTrack = {timeTrack}
                                setTimeTrack = {setTimeTrack}
                            />
                        )
                        break; 
                    default: 
                        return ( 
                            <p className={
                                `startGame_P ${Theme? "" : "BlackThemeText"}`}> 
                                comming soon...
                            </p>
                        )
                }
            };
            return ( 
                <> {games()} </>
            );
        } else { 
            // we are here before user click START text
            return ( 
                <p 
                    className={
                        `startGame_P ${Theme? "" : "BlackThemeText"}`} > 
                    start 
                </p> 
            )
        }
    }

    // play_Hendler function we use to identify each games name
    let play_Hendler = gameListData.filter((each) => each.id === PageIdentification)

    return ( 
        <div className="Games">
            <div className={`HowToPlay ${Theme? "" : "blackThemeBorder"}`}>
                <p className={Theme? "" : "BlackThemeText"}>  
                    { play_Hendler[0].HowToPlay }
                </p>
            </div>

            <div 
                className={`start_game ${Theme? "" : "blackThemeBorder"}`}
                // when click start text change setStart state to true
                onClick={() => setStart(true)} >
                    { Starting_Game_Hendler() }
            </div>
        </div>
    )
}


export default Games
