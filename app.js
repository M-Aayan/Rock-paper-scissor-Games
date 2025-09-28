let userScore = 0;
let CompScore = 0;

const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#User-score")
const CompScorePara = document.querySelector("#Comp-score")

const genCompChoice = () => {
  const Option = ["rock", "paper", "scissor"];
  const randIndx = Math.floor(Math.random() * 3);
  return Option[randIndx];
};

const DrawGame = () => {
  console.log("draw game");
  msg.innerText = "Game was Draw. Play Again 🤦‍♂️"
  msg.style.backgroundColor = "grey"
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++
    userScorePara.innerText = userScore
    console.log(`you Win ${userChoice} beats ${compChoice}`);
    msg.innerText =`you Win. Your ${userChoice} beats ${compChoice}😃`
    msg.style.backgroundColor = "green"
  } else {
    CompScore++
    CompScorePara.innerText = CompScore
    console.log(`you lose ${compChoice} beats ${userChoice}`);
    msg.innerText =`you lost ${compChoice} beats ${userChoice}😢`
    msg.style.backgroundColor = "red"
  }
};

const playGame = (userChoice) => {
  console.log("userchoice =", userChoice);
  //   generate computer choice

  const compChoice = genCompChoice();
  console.log("compChoice =", compChoice);

  if (userChoice === compChoice) {
    // draw game
    DrawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissors
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

Choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
