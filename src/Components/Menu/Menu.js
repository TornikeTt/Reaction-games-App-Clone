const Menu = (props) => { 
    const { 
      gameName, 
      summary, 
      gameNumber,
      setPageIdentification,
    } = props

    const Page_Identification_Hendler = (gameNumber) => { 
      setPageIdentification(gameNumber)
    }
    
    return ( 
      <div className="Menu" 
        onClick={ () =>  Page_Identification_Hendler(gameNumber) } > 
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




export default Menu
