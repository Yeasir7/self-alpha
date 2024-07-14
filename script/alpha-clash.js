function play(){
    hideSectionById('home-screen');
    hideSectionById('final-score')
    showSectionById('play-ground');

    setTextElementById('current-score', 0)
    setTextElementById('current-life', 5)
    continueGame();
}

function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBGById(alphabet);
}

document.addEventListener('keyup', function(event){
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet');
    const expectedAlphabet = currentAlphabet.innerText.toLowerCase();

    if(playerPressed === expectedAlphabet){
        const currentScore = getTextElementById('current-score');
        const updateScore = currentScore + 1;
        setTextElementById('current-score', updateScore);

        removeBGById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLife = getTextElementById('current-life');
        const updateLife = currentLife - 1;
        setTextElementById('current-life', updateLife);

        if(updateLife === 0){
            gameOver();
        }
    }
})

function gameOver(){
    hideSectionById('play-ground');
    showSectionById('final-score');

    const currentScore = document.getElementById('current-score')
    setTextElementById('last-score', currentScore.innerText)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
    removeBGById(currentAlphabet); 
}