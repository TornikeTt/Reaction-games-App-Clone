const Menu = (props) => { 
    const { 
        gameName, 
        summary, 
        gameNumber,
        setPageIdentification,
        Theme,
    } = props

    /* 
        Page_Identification_Hendler function we use to defain which game 
        user clicked
    */
    const Page_Identification_Hendler = (gameNumber) => { 
        // hear setPageIdentification hook we use to show relevant game on screen
        setPageIdentification(gameNumber)
    }
    
    return ( 
        <div 
            className={`Menu ${Theme? "" : "blackThemeBorder"} `}
            /* 
                Page_Identification_Hendler function we use to defain which game 
                user clicked 
            */
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
                        /*
                            Here we test that user change Theme or not
                            if change then we return same icone but 
                            different svg colors
                        */
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
                        /*
                            Here we test that user change Theme or not
                            if change then we return same icone but 
                            different svg colors
                        */
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
