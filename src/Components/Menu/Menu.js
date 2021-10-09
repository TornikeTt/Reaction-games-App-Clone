const Menu = (props) => { 
    const { 
      gameName, 
      summary, 
      gameNumber,
      setPageIdentification,
      Theme,
    } = props

    const Page_Identification_Hendler = (gameNumber) => { 
      setPageIdentification(gameNumber)
    }
    
    return ( 
        <div 
            className={`Menu ${Theme? "" : "blackThemeBorder"} `}
            onClick={ () =>  Page_Identification_Hendler(gameNumber) } > 
          <h1 className={`game_Name ${Theme? "":"BlackThemeText"}`}>
            { gameName } 
          </h1>

          <div className="summary_and_icons">
              <p className={`summary ${Theme? "" : "BlackThemeText"}`}> 
                  { summary } 
              </p>
              <div>
                  <img 
                      src= { 
                          Theme? 
                              "icones/question-solid.svg" 
                              :
                              "ChnageThemeIcones/question-solid.svg"
                      }
                      alt="question icone"
                      className="icone"
                  />
                  <img  
                      src= { Theme? 
                              "icones/history-solid.svg" 
                              :
                              "ChnageThemeIcones/history-solid.svg"
                      }
                      alt="history icone"
                      className="icone"
                  />
              </div>
          </div>
      </div>
    );
}




export default Menu
