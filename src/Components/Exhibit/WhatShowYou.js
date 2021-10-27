import Menu from "../Menu/Menu.js"
import Settings from "../Settings/Settings";
import { gameListData } from "../gameListData"
import { useSpring, animated } from "react-spring";
import Games from "../Games/Games"

const WhatShowYou = (props) => {
    const {
        settingToggle,
        difficultyValue,
        setDifficultyValue,
        PageIdentification,
        setPageIdentification,
        Theme,
        setTheme,
        eachLevel,
        setEachLevel,
        timeTrack,
        setTimeTrack,
    } = props

    /*
        here we use React spring to have animation
        animation heppend when react commpoennt change from Menu to Setting
    */
    const Setting_animation = useSpring({
        marginLeft: settingToggle ? 0 : 600,
    })

    const Menu_animation = useSpring( {
        marginRight: settingToggle ? 600 : 0
    })

   
    if( PageIdentification === 0 ) {
        // we are inside Menu or Setting

        if(settingToggle) {
            // when user inside Setting
            return (
                <animated.div style={Setting_animation}>
                    <Settings
                        settingToggle = { settingToggle }
                        difficultyValue = { difficultyValue }
                        setDifficultyValue = { setDifficultyValue }
                        Theme = { Theme }
                        setTheme = { setTheme }
                    />
                </animated.div>
            );
        } else {
            return (
                // return inside Menu where we see games
                gameListData.map( (eachData) => {
                    return (
                        <animated.div key={ eachData.id} style={Menu_animation}>
                            <Menu
                                gameName = { eachData.gameName }
                                summary = { eachData.summary }
                                gameNumber = { eachData.id }
                                setPageIdentification = { setPageIdentification }
                                Theme = { Theme }
                            />
                        </animated.div>
                    )
                })
            )
        }
    } else {
        // we are inside in one of the games 
        return (
              <Games 
                PageIdentification = { PageIdentification }
                Theme = { Theme }
                eachLevel = { eachLevel }
                setEachLevel = { setEachLevel }
                difficultyValue = { difficultyValue }
                setPageIdentification = { setPageIdentification }
                timeTrack = { timeTrack }
                setTimeTrack = { setTimeTrack }
              />
        );
    } 
}


export default WhatShowYou
