const rps = (p1, p2) => {
    if (p1 == p2) {
        console.log("Draw!")
    } else
    
    if (p1 === "rock" && p2 === "scissors") {
        console.log( "p1 wins!" )
    } else if (p1 === "paper" && p2 === "rock") {
        console.log( "p1 wins!" )
    } else if (p1 === "scissors" && p2 === "paper") {
        console.log("p1 wins!")
    } else {
       console.log( "p2 wins!" )
    } 
}

rps("paper", "scissors")