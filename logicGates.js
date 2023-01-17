//Logic gates all in one function
function logicGate(gate, a, b) {
    //Limits input to 1 and 0
    if (a >= 2 || a <= -1) {
        alert("Invalid input");
    }

    if (b >= 2 || b <= -1) {
        alert("Invalid input");
    }

    //Binary input and output
    if (gate[0] === "n" || gate[0] === "N" && gate[1] === "o" || gate[1] === "O" && gate[2] === "t" || gate[2] === "T") {
        if (a === 0) {
            return 1;
        } else if (a === 1) {
            return 0;
        }
    } else if (gate[0] === "a" || gate[0] === "A" && gate[1] === "n" || gate[1] === "N" && gate[2] === "d" || gate[2] === "D") {
        if (a === 0 && b === 0) {
            return 0;
        } else if (a === 0 && b === 1) {
            return 0;
        } else if (a === 1 && b === 0) {
            return 0;
        } else if (a === 1 && b === 1) {
            return 1;
        }
    } else if (gate[0] === "o" || gate[0] === "O" && gate[1] === "r" || gate[1] === "R") {
        if (a === 0 && b === 0) {
            return 0;
        } else if (a === 0 && b === 1) {
            return 1;
        } else if (a === 1 && b === 0) {
            return 1;
        } else if (a === 1 && b === 1) {
            return 1;
        }
    } else if (gate[0] === "n" || gate[0] === "N" && gate[1] === "o" || gate[1] === "O" && gate[2] === "r" || gate[2] === "R") {
        if (a === 0 && b === 0) {
            return 1;
        } else if (a === 0 && b === 1) {
            return 0;
        } else if (a === 1 && b === 0) {
            return 0;
        } else if (a === 1 && b === 1) {
            return 0;
        }
    } else if (gate[0] === "n" || gate[0] === "N" && gate[1] === "a" || gate[1] === "A" && gate[2] === "n" || gate[2] === "N" && gate[3] === "d" || gate[3] === "D") {
        if (a === 0 && b === 0) {
            return 1;
        } else if (a === 0 && b === 1) {
            return 1;
        } else if (a === 1 && b === 0) {
            return 1;
        } else if (a === 1 && b === 1) {
            return 0;
        }
    } else if (gate[0] === "x" || gate[0] === "X" && gate[1] === "o" || gate[1] === "O" && gate[2] === "r" || gate[2] === "R") {
        if (a === 0 && b === 0) {
            return 0;
        } else if (a === 0 && b === 1) {
            return 1;
        } else if (a === 1 && b === 0) {
            return 1;
        } else if (a === 1 && b === 1) {
            return 0;
        }
    } else if (gate[0] === "x" || gate[0] === "X" && gate[1] === "n" || gate[1] === "N" && gate[2] === "o" || gate[2] === "O" && gate[3] === "r" || gate[3] === "R") {
        if (a === 0 && b === 0) {
            return 1;
        } else if (a === 0 && b === 1) {
            return 0;
        } else if (a === 1 && b === 0) {
            return 0;
        } else if (a === 1 && b === 1) {
            return 1;
        }
    }
}