console.log("Hello World");
//let Options = ["rock","paper","scissors"];

let HumanScore = 0, ComputeScore = 0;

function getComputerChoice() {
    let Response = Math.floor(Math.random() * 3);
    console.log(Response);
    return Response;
}

function getHumanChoice() {
    let answer = parseInt(prompt("Please enter the number correspondind to the one option: 0 - Rock, 1 - Paper , 2 - scissors:"));
    return answer;
}

function PlayRound(HumanChoice, ComputerChoice) {
    switch (HumanChoice) {
        case 0:
            if (ComputerChoice == 1) {
                alert("Computer Wins");
                ComputeScore = ComputeScore + 1;
                break;
            } else if (ComputerChoice == HumanChoice) {
                alert("Tie");
                break
            } else {
                alert("Player Wins");
                HumanScore = HumanScore + 1;
                break;
            }
        case 1:
            if (ComputerChoice == 2) {
                alert("Computer Wins");
                ComputeScore = ComputeScore + 1;
                break;
            } else if (ComputerChoice == HumanChoice) {
                alert("Tie");
                break
            } else {
                alert("Player Wins");
                HumanScore = HumanScore + 1;
                break;
            }
        case 2:
            if (ComputerChoice == 0) {
                alert("Computer Wins");
                ComputeScore = ComputeScore + 1;
                break;
            } else if (ComputerChoice == HumanChoice) {
                alert("Tie");
                break
            } else {
                alert("Player Wins");
                HumanScore = HumanScore + 1;
                break;
            }
        default:
            alert("Only available throw 0 to 2");
    }
    document.getElementById("ScoreText").textContent = "Score: Player: " + HumanScore + " / Computer: " + ComputeScore
}

function StartGame() {
    let humanSelection = getHumanChoice();
    let computeSelection = getComputerChoice();
    PlayRound(humanSelection, computeSelection);
}


