import Menu from "../Menu/Menu.js"
import Settings from "../Settings/Settings";
import { gameList } from "../gameList";
import { useSpring, animated } from "react-spring";

// games
import ColorChangeGame from "../ColorChangeGame"

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
          // when user inside Setting
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
              // return inside Menu where we see games
              gameList.map( (eachData) => {
                return (
                    <animated.div key={ eachData.id} style={Menu_animation}>
                      <Menu
                        gameName = { eachData.gameName }
                        summary = { eachData.summary }
                        gameNumber = { eachData.id }
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
  } else{
      return (
          <div> COMIGN SOON.... { GameIdentification } </div>
      );
  }

}


export default WhatShowYou
