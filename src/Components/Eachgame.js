const Eachgame = (props) => { 

    const { 
        gameName, 
        summary, 
        gameNumber,
        GameIdentification , 
        setGameIdentification,
    } = props

    const GameIdentification_Hendler = (gameNumber) => { 
        setGameIdentification(gameNumber)
    }
    
    return ( 
        <div className="Each_game" onClick={ () =>  GameIdentification_Hendler(gameNumber) } > 
            <p className="game_Name">{ gameName } </p>
            
            <div className="summary_and_icons">
                <p className="summary"> { summary } </p>
                <div>
                    <img 
                        src="/icones/question-solid.svg" 
                        alt="question icone"
                        className="icone"
                    />
                    <img 
                        src="icones/history-solid.svg" 
                        alt="history icone"
                        className="icone"
                    />
                </div>
            </div>
        </div>
    );
}



export default Eachgame
