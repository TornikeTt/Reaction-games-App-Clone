import React from "react";
import {useState} from "react"
import { gameListData } from "../gameListData"
import { useSpring, animated } from "react-spring"

const ColorChangeGame = ({PageIdentification , Theme }) => { 
  const [ Starting_Games , setStarting_Games ] = useState(false)
  const [ ColorChange_Game_start , setColorChange_Game_start ] = useState(false)

  const ColorChange_count = useSpring({
    /*
     * so pause keyword we use to control when starting number animation
     * when Starting_ColorChange hook is false that means we see "start" 
     * on the screen so pausa value is true that means animation in paused 
     *
     * after change Starting_ColorChange value to true, pause value change false
     * that means number animation is start 
    */
    pause: Starting_Games ? false : true, 
    from: { number: 4 },
    to: { number: 0 },
    config: { 
      duration: 2000
    },
    onRest: () => setColorChange_Game_start(true) 
    // onRest change setColorChange_Game_start true and 
    // starting actually game 
  })

  const startGame_ColorChange_Hendler = () => { 
    if( Starting_Games ) { 
      // we been here after when user click start button
      // which means Starting_ColorChange hook become true
      if( ColorChange_Game_start ) { 
        return ( 
          // here game is actually starting 
          <div className={Theme? "" : "BlackThemeText"}> game is starting </div>
        )
      } else { 
        // here we see number animation
        return ( 
          <animated.p className={Theme? "" : "BlackThemeText"} >
            { ColorChange_count.number.to(val => Math.floor(val)) }
          </animated.p>
        )
      }

    } else { 
      // when Starting_ColorChange hook is false we see only "start"
      return <p className={Theme? "" : "BlackThemeText"} > start </p> 
    }

  }
    
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
              onClick={() => setStarting_Games(true)} >
              { 
                startGame_ColorChange_Hendler()
              }
          </div>
      </div>
  )
}


export default ColorChangeGame
