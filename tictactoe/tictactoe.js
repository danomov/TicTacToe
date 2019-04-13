//Creating needed components or catching them from html
let divs = document.querySelectorAll('.square');
let btn = document.querySelector('button');
let board = document.querySelector('board');
let arrayOfMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let experimentalMoves = ['', '', '', '', '', '', '', '', ''];

//Add click event listener function
const click = (e) => {
    if(!e.target.innerHTML){
        e.target.innerHTML = 'X';
        let index = e.target.id;
        experimentalMoves[index] = 'X';
        arrayOfMoves.splice(arrayOfMoves.indexOf(+index), 1);
        if(!win()){
            move();
        };
    }
}

//Connect click event to div squares
for(let i=0; i<divs.length; i++){
    divs[i].addEventListener('click', click);
}

//Our bot move function
const move = () => {
    let winIndex = '';
    let loseIndex = '';

    experimentalMoves.forEach((el, index) => {
        if(!experimentalMoves[index]){
        experimentalMoves[index] = 'O';

        if(expWin()){
        experimentalMoves[index] = '';
        winIndex = index;
        }
        else {
        experimentalMoves[index] = '';
        }
        }
    });

    experimentalMoves.forEach((el, index) => {
        if(!experimentalMoves[index]){
        experimentalMoves[index] = 'X';

        if(expWin()){
        experimentalMoves[index] = '';
        loseIndex = index;
        }
        else {
        experimentalMoves[index] = '';
        }
        }
    })

    if(winIndex){
        divs[winIndex].innerHTML = 'O';
        experimentalMoves[winIndex] = 'O';
        arrayOfMoves.splice(arrayOfMoves.indexOf(winIndex), 1);
        winIndex = '';
        win()
    } 
    else if(loseIndex){
        divs[loseIndex].innerHTML = 'O';
        experimentalMoves[loseIndex] = 'O';
        arrayOfMoves.splice(arrayOfMoves.indexOf(loseIndex), 1);
        loseIndex = '';
        win();
    }
    else {
        let rand = Math.floor(Math.random()*arrayOfMoves.length);
        if(!divs[arrayOfMoves[rand]].innerHTML){
            divs[arrayOfMoves[rand]].innerHTML = 'O';
            experimentalMoves[arrayOfMoves[rand]] = 'O';
            arrayOfMoves.splice(rand, 1);
            win();
        }
    }
}

//In this custom function bot is thinking about win
const expWin = () => {
    if(experimentalMoves[0] === experimentalMoves[3] && experimentalMoves[3] === experimentalMoves[6] && looker(experimentalMoves[0])){
        return true;
    }
    else if(experimentalMoves[0] === experimentalMoves[4] && experimentalMoves[4] === experimentalMoves[8] && looker(experimentalMoves[0])){
        return true;
    }
    else if(experimentalMoves[0] === experimentalMoves[1] && experimentalMoves[1] === experimentalMoves[2] && looker(experimentalMoves[0])){
        return true;
    }
    else if(experimentalMoves[1] === experimentalMoves[4] && experimentalMoves[4] === experimentalMoves[7] && looker(experimentalMoves[1])){
        return true;
    }
    else if(experimentalMoves[2] === experimentalMoves[5] && experimentalMoves[5] === experimentalMoves[8] && looker(experimentalMoves[2])){
        return true;
    }
    else if(experimentalMoves[2] === experimentalMoves[4] && experimentalMoves[4] === experimentalMoves[6] && looker(experimentalMoves[2])){
        return true;
    }
    else if(experimentalMoves[3] === experimentalMoves[4] && experimentalMoves[4] === experimentalMoves[5] && looker(experimentalMoves[3])){
        return true;
    }
    else if(experimentalMoves[6] === experimentalMoves[7] && experimentalMoves[7] === experimentalMoves[8] && looker(experimentalMoves[6])){
        return true;
    }
    else return false;
}

//This is for checking win after doing a move
const win = () => {
    if(!arrayOfMoves[0]){
        alert('DRAW');
        reset();
        return true;
    }
    else if(divs[0].innerHTML === divs[3].innerHTML && divs[3].innerHTML === divs[6].innerHTML && looker(divs[0].innerHTML)){
        congrats(divs[0].innerHTML);
        return true;
    }
    else if(divs[0].innerHTML === divs[4].innerHTML && divs[4].innerHTML === divs[8].innerHTML && looker(divs[0].innerHTML)){
        congrats(divs[0].innerHTML);
        return true;
    }
    else if(divs[0].innerHTML === divs[1].innerHTML && divs[1].innerHTML === divs[2].innerHTML && looker(divs[0].innerHTML)){
        congrats(divs[0].innerHTML);
        return true;
    }
    else if(divs[1].innerHTML === divs[4].innerHTML && divs[4].innerHTML === divs[7].innerHTML && looker(divs[1].innerHTML)){
        congrats(divs[1].innerHTML);
        return true;
    }
    else if(divs[2].innerHTML === divs[5].innerHTML && divs[5].innerHTML === divs[8].innerHTML && looker(divs[2].innerHTML)){
        congrats(divs[2].innerHTML);
        return true;
    }
    else if(divs[2].innerHTML === divs[4].innerHTML && divs[4].innerHTML === divs[6].innerHTML && looker(divs[2].innerHTML)){
        congrats(divs[2].innerHTML);
        return true;
    }
    else if(divs[3].innerHTML === divs[4].innerHTML && divs[4].innerHTML === divs[5].innerHTML && looker(divs[3].innerHTML)){
        congrats(divs[3].innerHTML);
        return true;
    }
    else if(divs[6].innerHTML === divs[7].innerHTML && divs[7].innerHTML === divs[8].innerHTML && looker(divs[6].innerHTML)){
        congrats(divs[6].innerHTML);
        return true;
    }
    else return false;
}

//Looking for signs of divs to be equal for checking wins 
const looker = (sign) => {
    if(sign === 'X' || sign === 'O'){
        return true;
    }
    return false;
}

//Reset whole game and start from beginning
const reset = () => {
    for(let j=0; j<divs.length; j++){
        if(divs[j].innerHTML){
            divs[j].innerHTML = '';
        }
    }
    arrayOfMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    experimentalMoves = ['', '', '', '', '', '', '', '', ''];
}

//Congratulation pop up window
const congrats = (sign) => {
    if(sign === 'X'){
        alert('YOU WON');
        reset();
    }
    else if(sign === 'O'){
        alert('BOT WON');
        reset();
    }
}

//Connecting reset button to its event handler
btn.addEventListener('click', reset);

