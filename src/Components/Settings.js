const Settings = (props) => { 
    const { difficultyValue , setDifficultyValue } = props;

    return ( 
        <>
            <div className="Share_App"> 
                <h1> SHARE APP </h1>
                <p> WiTH YOUR FRIENDS </p>
            </div>

            <div className="Change_Theam"> 
                <p> CHANGE THEME </p>
            </div>

            <div className="Repretitions"> 
                <p> NUMBER OF REPETITIONS IN TRAINING </p>

                <div className="difficulty"> 
                    <img 
                        src="icones/minus-solid.svg" 
                        alt="minus icone"
                        className="icone"
                        onClick={() => setDifficultyValue(difficultyValue - 1)}
                    />
                    <p> { difficultyValue } </p>
                    <img 
                        src="icones/plus-solid.svg" 
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
