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
        animation_SHADOW,
        setAnimation_SHADOW,
    } = props

    //"color" hook we use to define which color we use and when 
    const [ color , setColor ] = useState(Theme?  "white" : "black");
    /* 
        "showPenalty" hook we use to show penalty message,
        1. showPenalty is true ? that means we see penalty message
        2. showPenalty is false? that means we don't see penalty message
    */
    const [ showPenalty , setShowPenalty ] = useState(false);
    
    // we use "animation_show" hook to show animation when user start game 
    const [ animation_show , setAnimation_show ] = useState(true);

    /*
        "Animation_STOP" hook we use to stop 
        "ColorChange_Number_Animation_Hendler" function when "Penalty_Animation"
        function is runing.

        so when user use wrong click, for example click on the screen when 
        screen still white or black "ColorChange_Number_Animation_Hendler" 
        function which is 3 , 2 ,1 animation function is stop.

    */
    const [ Animation_STOP , setAnimation_STOP ] = useState(false);

    const ColorChange_Number_Animation_Hendler = useSpring({  
        /*
            pause property we use to stop animation, when Penalty_Animation 
            is runing Animation_STOP hook become true, which means that 
            "ColorChange_Number_Animation_Hendler"'s animation is stop.
        */
        pause: Animation_STOP,
        // on start we use to see in console all time track together
        onStart: () => { 
            /*
                when animation is start we need to have black shadow at 
                background so when setAnimation_SHADOW is true we see 
                background shadow.
            */
            setAnimation_SHADOW(true)
            console.log(timeTrack + " <= each round's time sum" )
        },
        from: { number: 4 },
        to: { number: 0 },
        config: { duration: 2000 },
        /* 
            "reset" props we use to call animation every time when click event
            will heppen
        */
        reset: animation_show,
        // onRest we use to not call animation again 
        onRest: () => { 
            // "setColorChange_Animation_show" for animation don't call again
            setAnimation_show(false);
            /*
                when 3,2,1 animation is end, we don't need to have back shadow
                color at background
            */
            setAnimation_SHADOW(false)
        }
    })
    /*
        "ColorChange_Number_Animation_Hendler_movment" function we use to help 
        "ColorChange_Number_Animation_Hendler" function. 

        so when ColorChange_Number_Animation_Hendler useSpring create some 
        animation which is 3, 2, 1, before this animation heppend we need 
        some movment, so for this we use 
        ColorChange_Number_Animation_Hendler_movment which we use to move our 
        3,2,1 animation. 
    */    
    const ColorChange_Number_Animation_Hendler_movment = useSpring({ 
        /*
            pause animation we use to stop animation movment until before 
            penalty animation is runing
        */
        pause: Animation_STOP,
        /*
            when animation_show is true we see 3,2,1 animation 
            1. if animation_show is true that means we start 200px and go to 
            0px because in "to" property if animation_show is true that means we
            get 0px.

            2. if animation_show is false that means we can't see 
            animation anymore so we want to animation return its place
            because when we restart animation again we need to have same 
            movment what we have before.
                so when animation_show is false 3,2,1 animation starting point 
                is center. and we go to 200px to left and 200px from top.
                when animation_show equl false margins looks like this 
                
                from: marginLeft: 0, marginTop: 0
                to: marginLeft: 200, marginTop: 200
        */
        from : { 
            marginLeft: animation_show? 200 : 0, 
            marginTop: animation_show? 200 : 0
        },
        to : { 
            marginLeft: animation_show? 0 : 200, 
            marginTop: animation_show? 0 : 200
        },
    });
    
    /* 
        Penalty_Animation function we use to every time when user make 
        wrong click for example click on the screen when screen is still white 
        then we should show Penalty whitch go from down side to the screen

        so this function we use to create some duration with React spring
    */  
    const Penalty_Animation = useSpring({ 
        onStart: () => { 
            /* 
                this hook we use to change Animation_STOP hook's state and 
                to stop "ColorChange_Number_Animation_Hendler"'s animation.
            */
            setAnimation_STOP(true);
            /*
                when penalty animation is start we don't need to see any shadow
                at the background. so here we change setAnimation_SHADOW hooks
                state value to sure until penalty animation is end we can't see
                background shadow.
            */
            setAnimation_SHADOW(false)
        },
        /* 
            bottom property we use to change penalty's location
            1. showPenalty is true ? bottom = 0
                so we cen see Penalty's text on the screen
            2. showPenalty is false? bottom = -500
                so we can't see penalty's text on the screen
        */
        bottom: showPenalty ? 0 : -50,
        //friction is like duration
        config: {friction: 30},
        onRest: () => { 
            // "setShowPenalty" for delete penalty message after animation end.
            setShowPenalty(false);
            // to restart "ColorChange_Number_Animation_Hendler"'s animation.
            setAnimation_STOP(false);
            /*
                after penalty animation is end then we need to see background 
                shadow, so for that we chagne setAnimation_SHADOW state to 
                true.
            */
            setAnimation_SHADOW(true)
        }
    })
    
    const Change_Level = () => { 
        if( animation_show === false ) { 
            // we are here when 3 , 2 ,1 animation is done
            
            /*
                "setColorChange_Animation_show" hook's we use to reset animation
                every time when user click on the board
            */
            setAnimation_show(true);

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
            AllTimes variable  we use to defaind some 
            random time when color should show, 
            1. all Times add 2000 which is animation duration time 
            (3,2,1 animation duration).
            2. all Times add 200 which is animation clear time. 
            (we clear animation from _ColorChange.scss).

            for example
            1. 500 + 2000 + 200 = 27000
            2. 1000 + 2000 + 200 = 3200
        */
        let AllTimes = [2700, 3200, 3700, 4200, 4700, 5200, 5700, 6200];
        /*
            AllTimes2 variable we use same reason what reason we use AllTimes
            but different between is that AllTimes variable we use when user 
            don't click wrong time. so AllTimes2 times we use when user use 
            wrong click 
        */
        let AllTimes2 = [6000 , 6500, 7000, 7500, 8000, 8500, 9000, 9500];
        // RandomColor we use to show random Color 
        let RandomColor = Math.floor(Math.random() * Allcolors.length);
        // RandomAppear we use to take randon time verious time 
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
                    /* 
                        when user finish all game round (5/5), then 
                        all time round's milliseconds sum multiply by 3
                    */
                    setTimeTrack(timeTrack * 3);
                    // stop counting time
                    clearInterval(TimeControl)
                    // go to EndPage 
                    setPageIdentification(1000)
                }
            } , 10);

        }, showPenalty ? AllTimes2[RandomAppear] : AllTimes[RandomAppear]);
        
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
                /*
                    if animation_SHADOW is true taht means we should see 
                    black shadow at background.
                */
                style={{backgroundColor: animation_SHADOW? "#989898" : color}} 
                className="ColorChange" 
                onClick = { Change_Level } > 
                {/* animated.p we use for animation 3,2,1 */}
                <animated.p 
                        style = { ColorChange_Number_Animation_Hendler_movment }
                        className={ 
                        `ColorChange_Number_Animation 
                        ${Theme? "" : "BlackThemeText"}
                        ${animation_show === true && Animation_STOP === false? "animation_show" : "animation_hide"}`
                        } 
                    >
                    { 
                        ColorChange_Number_Animation_Hendler.number.to(num => { 
                            return Math.floor(num)
                        })
                    }
                </animated.p>

                {/* for Penalty message */}
                <animated.div 
                    className="penalty" 
                    style={Penalty_Animation}>
                    <p> Penalty! +1s </p>
                    <p> OK </p>
                </animated.div>
            </div>
        );
    }
}

export default ColorChange
