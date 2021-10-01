import React from 'react';
import { useState  } from "react"
import WhatShowYou from "./WhatShowYou"

const Exhibit = () => {
  const [ volume, setVolume ] = useState(true);
  /*
    1. inside Menu "settingToggle" is false
    2. inside Setting "settingToggle" is true
  */
  const [ settingToggle, setSettingToggle ] = useState(false);

  const [ difficultyValue , setDifficultyValue ] = useState(5);
  const [ GameIdentification, setGameIdentification ] = useState(0)
  const [ Theme , setTheme] = useState(true) // for chaneing Them 

  const Volume_Hendler = () => {
    setVolume(!volume)
  }

  const Setting_Hendler = () => {
    setSettingToggle(!settingToggle);
  }

  const Header_Name_Hendler = () => {
    if ( settingToggle === true && GameIdentification === 0) {
      // when user is inside Settings
        return "SETTINGS"
    } else if ( settingToggle === false && GameIdentification === 0 ) {
      // when user is inside Menu
        return "MENU"
    } else if ( GameIdentification > 0) {
      // when user Click Any game
      switch(GameIdentification) {
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

  const left_icone_hendler = () => {
    if( GameIdentification > 0 || settingToggle === true) {
      // if we click any game or if we are inside Settings
      // show X icone left side of header tag
      return "icones/times-solid.svg"
    }

    if( settingToggle === false ) {
        //inside Menu
        if( volume ) {
            return "icones/volume-up-solid.svg"
        } else {
            return  "icones/volume-mute-solid.svg"
        }
    }
  }

  const right_icone_hendler = () => {

    if( GameIdentification > 0) {
        // when we click any game 
        return ( 
            <img
                src="icones/sync-alt-solid.svg"
                alt="settings icone"
                className="icone"
            />
        )

    } else {
        if( settingToggle === true && GameIdentification === 0) { 
            return ( 
                // when we are inside Settings
                <>
                <a href="https://www.instagram.com/" target="_blank">
                    <img 
                        src="icones/instagram-brands.svg"
                        alt="instagram icone" 
                        className="icone" 
                    />
                </a>
                </>
            )
        } else { 
            return ( 
                // when we are inside Menu
                <img
                    src="icones/cog-solid.svg"
                    alt="settings icone"
                    className="icone"
                    onClick = { Setting_Hendler }
                />
            )
        }
    }
      
  }

  const x = () => {
    // when we be in a game and click X icone it's go back to the menu
    setGameIdentification(0)
  }

  return (
    <main>
        <header>
            <img
                src = {
                    left_icone_hendler()
                }
                alt="Speakers icone"
                className="icone"
                onClick = {
                    GameIdentification > 0 ? x :
                    settingToggle ? Setting_Hendler : Volume_Hendler
                }
            />

            <p> { Header_Name_Hendler() } </p>
            { /* show only then when user click one of them games */ }
            { GameIdentification > 0 && <p> 1  / {difficultyValue} </p> }

            { /*  here onClick string has string which
                gave us error change another time  */ }

            {  
                right_icone_hendler()
            }
        </header>

        <div className="shape">
            <WhatShowYou
               settingToggle = { settingToggle }
               difficultyValue = { difficultyValue }
               setDifficultyValue = { setDifficultyValue }
               GameIdentification = { GameIdentification }
               setGameIdentification = { setGameIdentification }
            />
        </div>

    </main>
  );
}


export default Exhibit
