function hideSectionById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showSectionById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBGById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}

function removeBGById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    const value = parseInt(elementText)
    return value
}

function setTextElementById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')

    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)

    const alphabet = alphabets[index]
    return alphabet
}
