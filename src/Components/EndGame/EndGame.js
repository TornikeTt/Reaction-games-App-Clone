const EndGame = (props) => { 
    const { 
        timeTrack,
        setTimeTrack,
        setPageIdentification,
        setEachLevel,
        Theme,
    } = props

    /*
        checkScore function we use to check the user passed color change game 
        test or not 
    */
    const checkScore = () => { 
        if(timeTrack < 370) { 
            // we are here when user passed colorChange game test 
            return ( 
                <section className={Theme? "" : "blackThemeBorder"}>
                    <p className={Theme? "" : "BlackThemeText"}> 
                        average time 
                    </p>
                    <p className={Theme? "" : "BlackThemeText"}> 
                        {timeTrack - 1} milliseconds 
                    </p>
                    <p className={Theme? "" : "BlackThemeText"}> 
                        exercise is passed.
                    </p>
                </section>
            ) 
        } else { 
            // we are here when user failed colorChange game test 
            return ( 
                <section className={Theme? "" : "blackThemeBorder"}>
                    <p className={Theme? "" : "BlackThemeText"}> 
                        average time 
                    </p>
                    <p className={Theme? "" : "BlackThemeText"}> 
                        {timeTrack - 1} milliseconds 
                    </p>
                    <p className={Theme? "" : "BlackThemeText"}> 
                        exercise is failed. <br/> the average time is 
                        required to be less than 370 milliseconds 
                    </p>
                </section>
            )
        }
    }

    const EndGame_GOTOMEN = () => { 
        setPageIdentification(0)
        setEachLevel(1)
        setTimeTrack(0)
    }

    const EndGame_TRYAGIN = () => { 
        setPageIdentification(1)
        setEachLevel(1)
        setTimeTrack(0)
    }

    return (
        <div className="EndGame">
            <header>
                <h1 className={Theme? "" : "BlackThemeText"}> RESULT </h1>
            </header>

            {checkScore()}
           
            {/* Try again and go to home buttons */}
            <footer>
                <button 
                    className={ Theme? 
                        "" : "BlackBackgroundColor blackThemeBorder" 
                    }
                    onClick={EndGame_GOTOMEN}>
                    <h1 
                        className={Theme? "" : "BlackThemeText"}> 
                        GO TO MENU 
                    </h1>
                </button>
                <button 
                    className={ Theme? 
                        "" : "BlackBackgroundColor blackThemeBorder" 
                    }
                    onClick={EndGame_TRYAGIN}>
                    <h1 
                        className={Theme? "" : "BlackThemeText"}> 
                        TRY AGAIN
                    </h1>
                </button>
            </footer>
        </div>
    )
};


export default EndGame
