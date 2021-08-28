import Eachgame from "./Eachgame"
import Settings from "./Settings";
import { gameList } from "./gameList";

// games 
import ColorChangeGame from "./ColorChangeGame"

const WhatShowYou = (props) => { 

    const { 
       settingToggle,
       difficultyValue,
       setDifficultyValue,
       GameIdentification,
       setGameIdentification,
    } = props

    if( GameIdentification === 0 ) { 
        if(settingToggle) { 
            return ( 
                <Settings 
                    difficultyValue = { difficultyValue } 
                    setDifficultyValue = { setDifficultyValue }
                /> 
            ); 
        } else { 
            return ( 
                gameList.map( (eachData) => { 
                    return ( 
                        <Eachgame 
                            key ={ eachData.id }
                            gameName = { eachData.gameName }
                            summary = { eachData.summary }
                            gameNumber = { eachData.id }
                            GameIdentification = { GameIdentification }
                            setGameIdentification = { setGameIdentification }
                        />
                    )
                }) 
            )
        }
    }  else if ( GameIdentification === 1)  { 
        return ( 
            <ColorChangeGame />
        );
    } else if ( GameIdentification === 2) { 
        return ( 
            <div> finde number </div>
        );
    } else if ( GameIdentification === 3)  { 
        return ( 
            <div> Catch The ball </div>
        );
    } else if ( GameIdentification === 4 ) { 
        return ( 
            <div> find Color </div>
        )
    } else { 
        return ( 
            <div>comming soon... </div>
        );
    }
}


export default WhatShowYou
