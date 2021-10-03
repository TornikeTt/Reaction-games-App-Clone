import React from "react";
import {useState} from "react"
import { gameListData } from "../gameListData"
import { useSpring, animated } from "react-spring"

const ColorChangeGame = () => { 
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
          <div> game is starting </div>
        )
      } else { 
        // here we see number animation
        return ( 
          <animated.p>
            { ColorChange_count.number.interpolate(val => Math.floor(val)) }
          </animated.p>
        )
      }

    } else { 
      // when Starting_ColorChange hook is false we see only "start"
      return <p> start </p> 
    }

  }

  return ( 
      <div className="Games">
          <div className="HowToPlye">
              <p>click on the frame as soon as the color 
                  changes, as soon as possible </p>
          </div>

          <div 
              className="start_game" 
              onClick={() => setStarting_Games(true)} >
              { 
                startGame_ColorChange_Hendler()
              }
          </div>
      </div>
  )
}


export default ColorChangeGame
