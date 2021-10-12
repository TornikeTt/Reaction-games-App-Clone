import React from 'react';
import { useState  } from "react"
import WhatShowYou from "./WhatShowYou"

const Exhibit = ({Theme , setTheme}) => {
  const [ volume, setVolume ] = useState(true);
  /*
    1. inside Menu "settingToggle" is false
    2. inside Setting "settingToggle" is true
  */
  const [ settingToggle, setSettingToggle ] = useState(false);

  const [ difficultyValue , setDifficultyValue ] = useState(5);
  const [ eachLevel , setEachLevel ] = useState(0)

  const [ PageIdentification, setPageIdentification ] = useState(0)

  const Volume_Hendler = () => {
    setVolume(!volume)
  }

  const Setting_Hendler = () => {
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

 const left_icone_hendler = () => {
    if( PageIdentification > 0 || settingToggle === true) {
      // if we click any game or if we are inside Settings
      // show X icone left side of header tag
      return Theme? 
            // Here we test that user change Theme or not
            // if change then we return same icone but different colors
            "icones/times-solid.svg"
            :
            "ChnageThemeIcones/times-solid.svg"
    }

    if( settingToggle === false ) {
        //inside Menu
        if( volume ) {
            // Here we test that user change Theme or not
            // if change then we return same icone but different colors
            return  Theme? 
                "icones/volume-up-solid.svg" 
                : 
                "ChnageThemeIcones/volume-up-solid.svg" 
        } else {
            // Here we test that user change Theme or not
            // if change then we return same icone but different colors
            return  Theme? 
                "icones/volume-mute-solid.svg"
                :
                "ChnageThemeIcones/volume-mute-solid.svg"
        }
    }
  }

  const right_icone_hendler = () => {

    if( PageIdentification > 0) {
        // when we click any game 
        return ( 
            <img
                src= { Theme ? 
                        "icones/sync-alt-solid.svg" 
                        :
                        "ChnageThemeIcones/sync-alt-solid.svg"
                }
                alt="settings icone"
                className="icone"
            />
        )

    } else {
        if( settingToggle === true && PageIdentification === 0) { 
            return ( 
                // when we are inside Settings
                <>
                <a 
                    href="https://www.instagram.com/" 
                    target="_blank" 
                    rel="noreferrer">
                    <img 
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
            return ( 
                // when we are inside Menu
                <img
                    src={ 
                        Theme? 
                            "icones/settings.svg"       
                            :
                            "ChnageThemeIcones/settings.svg"
                    }
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
    setPageIdentification(0);
    setEachLevel(0);
  }

  return (
      <main className={ Theme? "" : "BlackBackgroundColor" }>
        <header>
            <img
                src = {
                    left_icone_hendler()
                }
                alt="Speakers icone"
                className="icone"
                onClick = {
                    PageIdentification > 0 ? x :
                    settingToggle ? Setting_Hendler : Volume_Hendler
                }
            />

            <p className={Theme? "" : "BlackThemeText"}> { Header_Name_Hendler() } </p>
            { /* show only then when user click one of them games */ }
            { PageIdentification > 0 && 
                <p className={Theme? "" : "BlackThemeText"}> 
                    {eachLevel} / {difficultyValue} 
                </p> 
            }

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
               PageIdentification = { PageIdentification }
               setPageIdentification = { setPageIdentification }
               Theme = { Theme }
               setTheme = { setTheme }
               eachLevel = { eachLevel }
               setEachLevel = { setEachLevel }
            />
        </div>

    </main>
  );
}


export default Exhibit
