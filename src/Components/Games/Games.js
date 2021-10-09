import React from "react";
import {useState} from "react"
import { gameListData } from "../gameListData"
import { useSpring, animated } from "react-spring"

const Games = ({PageIdentification , Theme }) => { 
    /* 
     * The "start" hook we use when user first see START text and click it 
     * before user click start text The "start" hook is false 
     * after user click start text then "start" hook is True 
     * when "start" hook is true then we check "animationStart" hook
    */
    const [ start , setStart ] = useState(false)
    /* 
     * The "animationStart" hook we use after user click START text
     * after animation is finish "animationStart"  hook will become false 
     * when "animationStart" is false that means number animations is end...
     * when animation is end then Games is start
    */
    const [ animationStart , setAnimationStart ] = useState(true)

    const Games_count = useSpring({
        /* 
            how puse work
                1. when "start" hook is false pause return true 
                which means animation didn't start
                2. after "start"  hook will become true then pause return 
                false which means The number animation is start
        */
        pause: start ? false : true, 
        from: { number: 4 },
        to: { number: 0 },
        config: { 
        duration: 2000
        },
        /* after when animation is end then onRest change "animationStart" hook's
        states from true to false. after that game is start */
        onRest: () => setAnimationStart(false) 
    })

    const Starting_Game_Hendler = () => { 
        if( start ) { 
            // we are here after user click START text
            if( animationStart ) { 
                // here we see number animation
                return ( 
                    <animated.p className={Theme? "" : "BlackThemeText"} >
                    { Games_count.number.to(val => Math.floor(val)) }
                    </animated.p>
                )
            } else { 
                // here game is actually starting 
                return ( 
                    <div className={Theme? "" : "BlackThemeText"}> 
                        game is starting 
                    </div>
                )
            }
        } else { 
            // we are here before user click START text
            return <p className={Theme? "" : "BlackThemeText"} > start </p> 
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
                onClick={() => setStart(true)} >
                    { Starting_Game_Hendler() }
            </div>
        </div>
    )
}


export default Games
