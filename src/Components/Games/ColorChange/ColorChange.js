import React, { useState , useEffect } from "react";
import { useSpring , animated } from "react-spring";

const ColorChange = (props) => { 
    const { 
        eachLevel,
        setEachLevel,
        Theme,
        difficultyValue,
        setPageIdentification,
        timeTrack,
        setTimeTrack,
    } = props

    //"color" hook we use to define which color we use and when 
    const [ color , setColor ] = useState(Theme?  "white" : "black");
    // "showPenalty" hook we use to show penalty message,  
    const [ showPenalty , setShowPenalty ] = useState(false);
    // we use "ColorChange_Animation_show" hook to show animation
    const [ 
        ColorChange_Animation_show , 
        setColorChange_Animation_show 
    ] = useState(true)


    const ColorChange_Number_Animation_Hendler = useSpring({ 
        onStart: () => { 
            console.log(timeTrack + " <= each round's time sum" )
        },
        from: { number: 4 },
        to: { number: 0 },
        config: { duration: 2000 },
        /* 
            "reset" props we use to call animation every time when click event
            will heppen
        */
        reset: ColorChange_Animation_show,
        // onRest we use to not call animation again and delete penalty message
        onRest: () => { 
            // "setColorChange_Animation_show" for animation don't call again
            setColorChange_Animation_show(false);
            // "setShowPenalty" for delete penalty message after animation end.
            setShowPenalty(false);
        }
    })
    
    const Change_Level = () => { 
        if( ColorChange_Animation_show === false ) { 
            // we are here when 3 , 2 ,1 animation is done
            
            /*
                "setColorChange_Animation_show" hook's we use to reset animation
                every time when user click on the board
            */
            setColorChange_Animation_show(true);

            // "setEachLevel" hook we use to add one point for exlample 2/5
            setEachLevel(eachLevel + 1);

            if( color === "white" || color === "black" )  { 
                // user go here when click white or black color.
                
                // "setShowPenalty" is for to show penalty
                setShowPenalty(true);
                // "setTimeTrack" hook here we use to penalty the user 100 seconds 
                setTimeTrack(timeTrack + 100);
            } else { 
                // user go here when click any color except white or black
                
                /*
                    setColor "hook" we use to return old color 
                    after user play at list one raound
                */
                setColor(Theme?  "white" : "black");
            };
        }
    };

    

    useEffect(() => { 
        let  Allcolors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
        ];

        /* 
            AllTimes variable and RandomAppear we use to defaind some 
            random time when color should show, all color sum to calculate as 
                1. 500 + 2000 + 200 = 27000
                2. 1000 + 2000 + 200 = 3200
            all Times add 2000 which is animation duration time.
            and all Times add 200 which is animation clear time.
        */

        let AllTimes = [2700, 3200, 3700, 4200, 4700, 5200, 5700, 6200];
        let RandomColor = Math.floor(Math.random() * Allcolors.length);
        let RandomAppear = Math.floor(Math.random() * AllTimes.length);

        let TimeControl;
        let milliseconds = 0;
        
        /*
            timeout variable we use to change random color after random time 
            and then, after show random color
        */ 
        const timeout = setTimeout(() => {
            setColor(Allcolors[RandomColor]);
            
            /*
                TimeControl variable we use for that when color change and 
                before user click that color start counting time.
                counting time is about what time user need to click to screen 
                after color is changed
            */
            TimeControl = setInterval(() => { 
                milliseconds = milliseconds + 1;
                // "setTimeTrack" hook here we use to sum all round time
                setTimeTrack(milliseconds + timeTrack)
                console.log(milliseconds + " <= counting time before user click color")
                
                /* 
                    after all round is will be performed 
                    stop counting time and go to EndPage 
                */
                if( eachLevel > difficultyValue ) { 
                    // stop counting time
                    clearInterval(TimeControl)
                    // go to EndPage 
                    setPageIdentification(1000)
                }
            } , 100);

        }, AllTimes[RandomAppear]);
        
        return () => { 
            /*
                for counting time what time user need to 
                click screen after color is changed
            */
            clearInterval(TimeControl)
            // for random color and random Time
            clearTimeout(timeout);
        }

    }, [eachLevel])


    
    if( eachLevel > difficultyValue) { 
        /* 
            after user will perfom all round 5/5 
            then before we go to EndPage we see Gifs
        */
        return ( 
            <div className="ColorChange_Game_gif">
                <img src="Gifs/ZZ5H.gif"  alt="gif after game is end" />
            </div>
        ); 
    } else { 
        return ( 
            <div 
                style={{backgroundColor: color}} 
                className="ColorChange" 
                onClick = { Change_Level } > 
                {/* animated.p we use for animation 3,2,1 */}
                <animated.p 
                        style = { {opacity: ColorChange_Animation_show? 1 : 0}}
                        className={ 
                        `ColorChange_Number_Animation 
                        ${Theme? "" : "BlackThemeText"}`} >
                    { 
                        ColorChange_Number_Animation_Hendler.number.to(num => { 
                            return Math.floor(num)
                        })
                    }
                </animated.p>

                {/* for Penalty message */}
                <div className={showPenalty? "penalty" : "non_penalty"}>
                    <p> Penalty! +1s </p>
                    <p> OK </p>
                </div>
            </div>
        );
    }
}

export default ColorChange
