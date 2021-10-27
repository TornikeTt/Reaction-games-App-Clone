const Settings = (props) => { 
    const { difficultyValue , setDifficultyValue , Theme, setTheme} = props;

    return ( 
        <>
            {/*
                Here we test that user change Theme or not
                if change then we return same icone but different svg colors
            */}
            <div className={`Share_App ${Theme? "" : "blackThemeBorder"}`}> 
                <h1 className={Theme ? "" : "BlackThemeText"}> SHARE APP </h1>
                <p className={Theme ? "" : "BlackThemeText"}> WiTH YOUR FRIENDS </p>
            </div>

            <div className={`Change_Theam ${Theme? "" : "blackThemeBorder"}`}> 
                <h1 
                    className={Theme ? "" : "BlackThemeText"}
                    // this onClick change Theme state
                    onClick={ () => setTheme(!Theme)}> 
                    CHANGE THEME 
                </h1>
            </div>

            <div className={`Repretitions ${Theme? "" : "blackThemeBorder"}`}> 
                <h1 
                    className={Theme ? "" : "BlackThemeText"}> 
                    NUMBER OF REPETITIONS IN TRAINING </h1>

                <div className="difficulty"> 
                    <img 
                        src={ Theme ? 
                                "icones/minus-solid.svg"
                                :
                                "ChnageThemeIcones/minus-solid.svg"
                        }
                        alt="minus icone"
                        className="icone"
                        onClick={() => setDifficultyValue(difficultyValue - 1)}
                    />
                    <p 
                        className={Theme? "" : "BlackThemeText"}> 
                        { difficultyValue } 
                    </p>
                    <img 
                        src= { Theme ? 
                                "icones/plus-solid.svg" 
                                :
                                "ChnageThemeIcones/plus-solid.svg"
                        }
                        alt="plus icone"
                        className="icone"
                        onClick={() => setDifficultyValue(difficultyValue + 1)}
                    />
                </div>

            </div>
        </>
    );
}


export default Settings
