let userscore = 0;
let compscore = 0;
const msg= document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const gencompchoice = () => {
    const options=["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame = () => {
    console.log("it was a draw");
    msg.innerText= "it was a draw";
   
}
const showinner = (userwin,userChoice,compChoice) => {
    if(userwin===true){
        userscore++;
        userscorepara.innerText= userscore;
        console.log("you win");
        msg.innerText=`you win!your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText=`you lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}
const playgame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = gencompchoice();
    console.log("comp choice = ",compChoice);
    if (userChoice===compChoice){
        drawgame();
    }
    else{ 
        let userwin = true;
    if (userChoice==="rock"){
        userwin=compChoice==="paper"? false:true;
    }else if (userChoice==="paper"){
        userwin=compChoice==="scissors"?false:true;

    }else if(userChoice==="scissors"){
        userwin = compChoice==="rock"?false:true;
    }
showinner(userwin,userChoice,compChoice);
}};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});










  











































