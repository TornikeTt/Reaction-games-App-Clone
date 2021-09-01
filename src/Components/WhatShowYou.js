import Eachgame from "./Eachgame"
import Settings from "./Settings";
import { gameList } from "./gameList";

// games 
import ColorChangeGame from "./ColorChangeGame"


import { useSpring, animated } from "react-spring";

const WhatShowYou = (props) => { 
    
    const { 
       settingToggle,
       difficultyValue,
       setDifficultyValue,
       GameIdentification,
       setGameIdentification,
    } = props
    
    // here we use React spring to have animation 
    // animation heppend when react commpoennt change from Menu to Setting 
    const Setting_animation = useSpring({ 
        marginLeft: settingToggle ? 0 : 600
    })

    const Menu_animation = useSpring( { 
        marginRight: settingToggle ? 600 : 0
    })


    if( GameIdentification === 0 ) { 
        if(settingToggle) { 
            return ( 
                <animated.div style={Setting_animation}>
                <Settings 
                    settingToggle = { settingToggle }
                    difficultyValue = { difficultyValue } 
                    setDifficultyValue = { setDifficultyValue }
                /> 
                </animated.div>
            ); 
        } else { 
            return ( 
                gameList.map( (eachData) => { 
                    return ( 
                        <animated.div style={Menu_animation}>
                        <Eachgame 
                            key ={ eachData.id }
                            gameName = { eachData.gameName }
                            summary = { eachData.summary }
                            gameNumber = { eachData.id }
                            GameIdentification = { GameIdentification }
                            setGameIdentification = { setGameIdentification }
                        />
                        </animated.div>
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
