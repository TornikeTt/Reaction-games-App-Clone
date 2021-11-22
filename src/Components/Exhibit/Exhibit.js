import React from 'react';
import { useState  } from "react"
import WhatShowYou from "./WhatShowYou"
import EndGame from "../EndGame/EndGame"

const Exhibit = ({Theme , setTheme, animation_SHADOW, setAnimation_SHADOW}) => {
    const [ volume, setVolume ] = useState(true);
    /*
        "settingToggle" we use to toggle between Menu and Setting components
        1. inside Menu "settingToggle" is false
        2. inside Setting "settingToggle" is true
    */
    const [ settingToggle, setSettingToggle ] = useState(false);
    /*
        difficultyValue hook we use to defain define how meny time user should
        play to finish the game.  
        1/5 hear 5 is difficultyValue and 1 is eachLevel
    */
    const [ difficultyValue , setDifficultyValue ] = useState(5);
    /* 
        "eachLevel" hook we use for to define what is current level of user
        1/5 here 1 means current level of the user.
    */
    const [ eachLevel , setEachLevel ] = useState(1)
    /* 
        PageIdentification hook we use to define which component should show 
        on the screen 
        PageIdentification = 0 means show Menu or Setting
    */
    const [ PageIdentification, setPageIdentification ] = useState(0)
    /*
        "timeTrack" hook we use to track the time which user needed to perfom 
        all level.
    */
    const [ timeTrack , setTimeTrack ] = useState(0);
    
    // if PageIdentification is 1000 that means we are inside EndGame.
    if(PageIdentification === 1000) { 
        return ( 
            <EndGame  
                timeTrack = {timeTrack}
                setTimeTrack = {setTimeTrack}
                setPageIdentification = { setPageIdentification }
                setEachLevel = {setEachLevel}
                Theme = {Theme}
            />
        )
    }
    /*
        "Volume_Hendler" function change "setVolume" hook's state 
        which we use to toggle between turn on or turn of voice icone
    */
    const Volume_Hendler = () => {
        setVolume(!volume)
    }

    // Setting_Hendler function we use to show Menu or Setting components
    const Setting_Hendler = () => {
        // here we change state and then we toggole between Menu and setting
        setSettingToggle(!settingToggle);
    }

    const Header_Name_Hendler = () => {
        if ( settingToggle === true && PageIdentification === 0) {
            // when user is inside Settings
            return "SETTINGS"
        } else if ( settingToggle === false && PageIdentification === 0 ) {
            // when user is inside Menu
            return "MENU"
        } else if ( PageIdentification > 0) {
            // when user Click Any game
            switch(PageIdentification) {
            case 1:
              return "COLOR CHANGE"
              break;
            case 2:
              return "FIND NUMBER"
              break;
            case 3:
              return "CATCH THE BALL"
              break;
            case 4:
              return "FIND COLOR"
              break;
            default:
              return "COMING SOON..."
            };
        }
    }


    /*
        left_icone_hendler function we use to hendler different 
        icone of header's left side. 

        in this function we hendler 3 kind of icones
            1. X icone <== inside Any game or inside setting 
            2. turn on <== inside Menu 
            3. turn off <== inside Menu
    */

    const left_icone_hendler = () => {
        if( PageIdentification > 0 || settingToggle === true) {
            /*
                if we click ANY GAME or if we are INSIDE SETTING
                show X icone left side of header tag
            */
            return Theme? 
            /*
                Here we test that user change Theme or not
                if change then we return same icone but different svg colors
            */
            "icones/times-solid.svg"
            :
            "ChnageThemeIcones/times-solid.svg"
        }

        if( settingToggle === false ) {
            /*  INSIDE MENU 
                when we are inside Menu's of the header left side we 
                should see volum icone.
            */

            /*
                this if statement we need to defain which volum icone should 
                show turn on or turn of
            */ 
            if( volume ) {
                // INSIDE turn on volume icone

                /*
                    Here we test that user change Theme or not
                    if change then we return same icone but 
                    different svg colors
                */
                return  Theme? 
                "icones/volume-up-solid.svg" 
                : 
                "ChnageThemeIcones/volume-up-solid.svg" 
            } else {
                // INSIDE turn of volumn icone
            
                /*
                    Here we test that user change Theme or not
                    if change then we return same icone but 
                    different svg colors
                */
                return  Theme? 
                "icones/volume-mute-solid.svg"
                :
                "ChnageThemeIcones/volume-mute-solid.svg"
            }
        }
    }


    /*
        right_icone_hendler function we use to hendler different 
        icone of header's right side. 

        in this function we hendler 3 kind of icones
            1. try again icone <== inside any game
            2. instagram icone <== inside setting 
            3. setting icone <== inside Menu
    */
    
    const right_icone_hendler = () => {
        if( PageIdentification > 0) {
            // when we click any game 
            return ( 
                <img
                    /*
                        Here we test that user change Theme or not
                        if change then we return same icone but 
                        different svg colors
                    */
                    src= { Theme ? 
                        "icones/sync-alt-solid.svg" 
                        :
                        "ChnageThemeIcones/sync-alt-solid.svg"
                    }
                    /*
                        here onClick change "setEachLevel" hook's state to 1
                        which mens if user's current level is 3/5 after user 
                        click try agin icone his current level is 1/5.
                    */
                    onClick = {() => setEachLevel(1)}
                    alt="try agin icone"
                    className="icone"
                />
            )
        } else {
            // INSIDE MENU OR SETTING 
            if( settingToggle === true && PageIdentification === 0) { 
                // when we are inside Settings
                return ( 
                    <>
                        <a 
                        href="https://www.instagram.com/" 
                        target="_blank" 
                        rel="noreferrer">
                            <img 
                                /*
                                    Here we test that user change Theme or not
                                    if change then we return same icone but 
                                    different svg colors
                                */
                                src= { Theme? 
                                    "icones/instagram-brands.svg"
                                    :
                                    "ChnageThemeIcones/instagram-brands.svg"
                                }
                                alt="instagram icone" 
                                className="icone" 
                            />
                        </a>
                    </>
                )
            } else { 
                // when we are inside Menu
                return ( 
                    <img
                        /*
                            Here we test that user change Theme or not
                            if change then we return same icone but 
                            different svg colors
                        */
                        src={ Theme? 
                            "icones/settings.svg"       
                            :
                            "ChnageThemeIcones/settings.svg"
                        }
                        alt="settings icone"
                        className="icone"
                        /*
                            onClick here we use to when user click 
                            setting icone then go to setting page
                        */
                        onClick = { Setting_Hendler }
                    />
                )
            }
        }

    }

    const x = () => {
        // when we be in a game and click X icone it's go back to the menu
        setPageIdentification(0);
        // when user click X icone that then current level becomne 1
        setEachLevel(1);
    } 

    return (
        <main className={ Theme? "" : "BlackBackgroundColor" } >
            <header>
                <img
                    src = {
                        left_icone_hendler()
                    }
                    alt="X Icone, Turn off or Turn On volume icone"
                    className="icone"
                    /*
                        this onClick we use.
                    
                        1. when PageIdentification is more then 0 that 
                        means we are inside any game. so if we ar inside game 
                        we must see header's left side X icone, so here we call
                        X icone's function to go to Menu Page.

                        2. if PageIdentification is not more to 0 that means 
                        we are inside Menu or Setting so here we use 
                        settingToggle hook to defain where we are.
                        
                        settingToggle = false we call Volume_Hendler function
                        settingToggle = true we call settingToggle function

                        p.s if settingToggle is true that means we are inside 
                        setting component. so heders's left side we also see 
                        X-icone.
                        
                    */
                    onClick = {
                        PageIdentification > 0 ? x :
                        settingToggle ? Setting_Hendler : Volume_Hendler
                    }
                />
                
                { /* 
                    we use this Header_Name_Hendler function to show 
                    relevant header name
                */ }
                <p className={Theme? "" : "BlackThemeText"}> 
                    { Header_Name_Hendler() } 
                </p>

                { /* show only then when user click one of them games */ }
                { PageIdentification > 0 && 
                    <p className={Theme? "" : "BlackThemeText"}> 
                        {eachLevel} / {difficultyValue} 
                    </p> 
                }

                {  
                    right_icone_hendler()
                }
            </header>

            <div className="shape">
                <WhatShowYou
                    settingToggle = { settingToggle }
                    difficultyValue = { difficultyValue }
                    setDifficultyValue = { setDifficultyValue }
                    PageIdentification = { PageIdentification }
                    setPageIdentification = { setPageIdentification }
                    Theme = { Theme }
                    setTheme = { setTheme }
                    eachLevel = { eachLevel }
                    setEachLevel = { setEachLevel }
                    timeTrack = { timeTrack }
                    setTimeTrack = { setTimeTrack }
                    animation_SHADOW = {animation_SHADOW}
                    setAnimation_SHADOW = {setAnimation_SHADOW}
                />
            </div>
        </main>
    )
}


export default Exhibit
