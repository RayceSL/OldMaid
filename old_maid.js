/* 
██    ██  █████  ██████  ██  █████  ██████  ██      ███████ ███████ 
██    ██ ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██      ██      
██    ██ ███████ ██████  ██ ███████ ██████  ██      █████   ███████ 
 ██  ██  ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██           ██ 
  ████   ██   ██ ██   ██ ██ ██   ██ ██████  ███████ ███████ ███████ 
 */

// removed the queen of spades

let deck = [
    {"name": "A♥",  "rank": 0,  "suit": 0},
    {"name": "2♥",  "rank": 1,  "suit": 0},
    {"name": "3♥",  "rank": 2,  "suit": 0},
    {"name": "4♥",  "rank": 3,  "suit": 0},
    {"name": "5♥",  "rank": 4,  "suit": 0},
    {"name": "6♥",  "rank": 5,  "suit": 0},
    {"name": "7♥",  "rank": 6,  "suit": 0},
    {"name": "8♥",  "rank": 7,  "suit": 0},
    {"name": "9♥",  "rank": 8,  "suit": 0},
    {"name": "10♥", "rank": 9,  "suit": 0},
    {"name": "J♥",  "rank": 10, "suit": 0},
    {"name": "Q♥",  "rank": 11, "suit": 0},
    {"name": "K♥",  "rank": 12, "suit": 0},

    {"name": "A♦",  "rank": 0,  "suit": 1},
    {"name": "2♦",  "rank": 1,  "suit": 1},
    {"name": "3♦",  "rank": 2,  "suit": 1},
    {"name": "4♦",  "rank": 3,  "suit": 1},
    {"name": "5♦",  "rank": 4,  "suit": 1},
    {"name": "6♦",  "rank": 5,  "suit": 1},
    {"name": "7♦",  "rank": 6,  "suit": 1},
    {"name": "8♦",  "rank": 7,  "suit": 1},
    {"name": "9♦",  "rank": 8,  "suit": 1},
    {"name": "10♦", "rank": 9,  "suit": 1},
    {"name": "J♦",  "rank": 10, "suit": 1},
    {"name": "Q♦",  "rank": 11, "suit": 1},
    {"name": "K♦",  "rank": 12, "suit": 1},

    {"name": "A♣",  "rank": 0,  "suit": 2},
    {"name": "2♣",  "rank": 1,  "suit": 2},
    {"name": "3♣",  "rank": 2,  "suit": 2},
    {"name": "4♣",  "rank": 3,  "suit": 2},
    {"name": "5♣",  "rank": 4,  "suit": 2},
    {"name": "6♣",  "rank": 5,  "suit": 2},
    {"name": "7♣",  "rank": 6,  "suit": 2},
    {"name": "8♣",  "rank": 7,  "suit": 2},
    {"name": "9♣",  "rank": 8,  "suit": 2},
    {"name": "10♣", "rank": 9,  "suit": 2},
    {"name": "J♣",  "rank": 10, "suit": 2},
    {"name": "Q♣",  "rank": 11, "suit": 2},
    {"name": "K♣",  "rank": 12, "suit": 2},

    {"name": "A♠",  "rank": 0,  "suit": 3},
    {"name": "2♠",  "rank": 1,  "suit": 3},
    {"name": "3♠",  "rank": 2,  "suit": 3},
    {"name": "4♠",  "rank": 3,  "suit": 3},
    {"name": "5♠",  "rank": 4,  "suit": 3},
    {"name": "6♠",  "rank": 5,  "suit": 3},
    {"name": "7♠",  "rank": 6,  "suit": 3},
    {"name": "8♠",  "rank": 7,  "suit": 3},
    {"name": "9♠",  "rank": 8,  "suit": 3},
    {"name": "10♠", "rank": 9,  "suit": 3},
    {"name": "J♠",  "rank": 10, "suit": 3},
    {"name": "K♠",  "rank": 12, "suit": 3}
]

let player0 = [];
let player1 = [];
let player2 = [];

/* 
███████ ██    ██ ███    ██  ██████ ████████ ██  ██████  ███    ██ ███████ 
██      ██    ██ ████   ██ ██         ██    ██ ██    ██ ████   ██ ██      
█████   ██    ██ ██ ██  ██ ██         ██    ██ ██    ██ ██ ██  ██ ███████ 
██      ██    ██ ██  ██ ██ ██         ██    ██ ██    ██ ██  ██ ██      ██ 
██       ██████  ██   ████  ██████    ██    ██  ██████  ██   ████ ███████ 
 */

// Took this guy's code: https://stackoverflow.com/a/2440720/25562183
function swapCard(array, indexA, indexB) {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
}

function deal(fromPlayer, toPlayer) {
    let randIndex = (Math.floor(Math.random() * fromPlayer.length));
    swapCard(fromPlayer, randIndex, 0);
    toPlayer.unshift(fromPlayer[0]);
    fromPlayer.shift();
}

function findPairs(player) {
    player.sort((a,b) => a.rank - b.rank);
    let i = 0
    while(i < 51 && player.length >= 2) {
        if (player[0].rank == player[1].rank) {
            player.shift();
            player.shift();
        } else {
            player.push(player[0]);
            player.shift();
            i++;
        }
    }
}

/* 
████████ ██   ██ ███████     ██████  ███████  █████  ██      
   ██    ██   ██ ██          ██   ██ ██      ██   ██ ██      
   ██    ███████ █████       ██   ██ █████   ███████ ██      
   ██    ██   ██ ██          ██   ██ ██      ██   ██ ██      
   ██    ██   ██ ███████     ██████  ███████ ██   ██ ███████ 
 */
let cardCount = 51;

console.log("Let's \"play\" Old Maid!\nDealing cards...");

while (cardCount > 0) {
    deal(deck, player0);
    cardCount--;
    deal(deck, player1);
    cardCount--;
    deal(deck, player2);
    cardCount--;
}
/* 
██████   █████  ███████ ███████ 
██   ██ ██   ██    ███  ██      
██████  ███████   ███   █████   
██   ██ ██   ██  ███    ██      
██   ██ ██   ██ ███████ ███████ 
 */
findPairs(player0);

findPairs(player1);

findPairs(player2);
/* 
████████ ██   ██ ███████     ██████  ██       █████  ██    ██ 
   ██    ██   ██ ██          ██   ██ ██      ██   ██  ██  ██  
   ██    ███████ █████       ██████  ██      ███████   ████   
   ██    ██   ██ ██          ██      ██      ██   ██    ██    
   ██    ██   ██ ███████     ██      ███████ ██   ██    ██    
 */

let turnCount = 1;

/* 
██    ██  ██████  ██    ██ ██████      ████████ ██    ██ ██████  ███    ██ 
 ██  ██  ██    ██ ██    ██ ██   ██        ██    ██    ██ ██   ██ ████   ██ 
  ████   ██    ██ ██    ██ ██████         ██    ██    ██ ██████  ██ ██  ██ 
   ██    ██    ██ ██    ██ ██   ██        ██    ██    ██ ██   ██ ██  ██ ██ 
   ██     ██████   ██████  ██   ██        ██     ██████  ██   ██ ██   ████ 
 */
   function player0Turn() {
    console.log(`\n██████\n\nTurn: ${turnCount}.`);
    console.log("Your hand:");
    for (let k = 0; k < player0.length; k++) {
        console.log(player0[k].name);
    }

    if (player0.length + player1.length + player2.length == 1) {
        console.log("The other players have no cards!");
        endGame();
    } else if (player2.length == 0) {
        console.log("Player2 has no cards!\nYou must take from Player1 instead...");
        deal(player1, player0);
        console.log(`Took the: ${player0[0].name}`);
        console.log("Your hand:");
        for (let k = 0; k < player0.length; k++) {
            console.log(player0[k].name);
        }

        if (player0.length >= 2) {
            console.log("You pair up your cards...");
            findPairs(player0);
            console.log("Your hand:");
            for (let k = 0; k < player0.length; k++) {
                console.log(player0[k].name);
            }
            turnCount++;
            console.log("You pass the game to Player1...");
            player1Turn();

        } else {
            console.log("You only have one card, there's no need to check for pairs.");
            console.log("Your hand:");
            for (let k = 0; k < player0.length; k++) {
                console.log(player0[k].name);
            }
            turnCount++;
            console.log("You passes the game to Player1...");
            player1Turn();
        }
    } else {
        console.log("You take a card from Player2... ");
        deal(player2, player0);
        console.log(`Took the: ${player0[0].name}`);
        console.log("Your hand:");
        for (let k = 0; k < player0.length; k++) {
            console.log(player0[k].name);
        }

        if (player0.length >= 2) {
            console.log("You pair up your cards...");
            findPairs(player0);
            console.log("Your hand:");
            for (let k = 0; k < player0.length; k++) {
                console.log(player0[k].name);
            }
            turnCount++;
            console.log("You pass the game to Player1...");
            player1Turn();

        } else {
            console.log("You only have one card, there's no need to check for pairs.");
            console.log("Your hand:");
            for (let k = 0; k < player0.length; k++) {
                console.log(player0[k].name);
            }
            turnCount++;
            console.log("You pass the game to Player1...");
            player1Turn();
        }
    }
}
/* 
██████   ██     ████████ ██    ██ ██████  ███    ██ 
██   ██ ███        ██    ██    ██ ██   ██ ████   ██ 
██████   ██        ██    ██    ██ ██████  ██ ██  ██ 
██       ██        ██    ██    ██ ██   ██ ██  ██ ██ 
██       ██        ██     ██████  ██   ██ ██   ████ 
 */
function player1Turn() {
    console.log(`\n██████\n\nTurn: ${turnCount}.`);

    if (player1.length + player2.length + player0.length == 1) {
        console.log("The other Players have no cards!");
        endGame();
    } else if (player0.length == 0) {
        console.log("You have no cards!\nPlayer1 must take from Player2 instead...");
        deal(player2, player1);

        if (player1.length >= 2) {
            console.log("Player1 pairs up their cards...");
            findPairs(player1);
            turnCount++;
            console.log("Player1 passes the game to Player2...");
            player2Turn();

        } else {
            console.log("Player1 only has one card, there's no need to check for pairs.");
            turnCount++;
            console.log("Player1 passes the game to Player2...");
            player2Turn();
        }
    } else {
        console.log("Player1 takes a card from you... ");
        deal(player0, player1);
        console.log(`Took the: ${player1[0].name}`);

        if (player1.length >= 2) {
            console.log("Player1 pairs up their cards...");
            findPairs(player1);
            turnCount++;
            console.log("Player1 passes the game to Player2...");
            player2Turn();

        } else {
            console.log("Player1 only has one card, there's no need to check for pairs.");
            turnCount++;
            console.log("Player1 passes the game to Player2...");
            player2Turn();
        }
    }
}
/* 
██████  ██████      ████████ ██    ██ ██████  ███    ██ 
██   ██      ██        ██    ██    ██ ██   ██ ████   ██ 
██████   █████         ██    ██    ██ ██████  ██ ██  ██ 
██      ██             ██    ██    ██ ██   ██ ██  ██ ██ 
██      ███████        ██     ██████  ██   ██ ██   ████ 
 */
function player2Turn() {
    console.log(`\n██████\n\nTurn: ${turnCount}.`);

    if (player2.length + player0.length + player1.length == 1) {
        console.log("The other players have no cards!");
        endGame();
    } else if (player1.length == 0) {
        console.log("Player1 has no cards!\nPlayer2 must take from you instead...");
        deal(player0, player2);
        console.log(`Took the: ${player2[0].name}`);

        if (player2.length >= 2) {
            console.log("Player2 pairs up their cards...");
            findPairs(player2);
            turnCount++;
            console.log("Player2 passes the game to you...");
            player0Turn();

        } else {
            console.log("Player2 only has one card, there's no need to check for pairs.");
            turnCount++;
            console.log("Player2 passes the game to you...");
            player0Turn();
        }
    } else {
        console.log("Player2 takes a card from Player1... ");
        deal(player1, player2);

        if (player2.length >= 2) {
            console.log("Player2 pairs up their cards...");
            findPairs(player2);
            turnCount++;
            console.log("Player2 passes the game to you...");
            player0Turn();

        } else {
            console.log("player2 only has one card, there's no need to check for pairs.");
            turnCount++;
            console.log("player2 passes the game to you...");
            player0Turn();
        }
    }
}
/* 
███████ ████████  █████  ██████  ████████      ██████   █████  ███    ███ ███████ 
██         ██    ██   ██ ██   ██    ██        ██       ██   ██ ████  ████ ██      
███████    ██    ███████ ██████     ██        ██   ███ ███████ ██ ████ ██ █████   
     ██    ██    ██   ██ ██   ██    ██        ██    ██ ██   ██ ██  ██  ██ ██      
███████    ██    ██   ██ ██   ██    ██         ██████  ██   ██ ██      ██ ███████ 
 */
player0Turn();
/* 
███████ ███    ██ ██████  
██      ████   ██ ██   ██ 
█████   ██ ██  ██ ██   ██ 
██      ██  ██ ██ ██   ██ 
███████ ██   ████ ██████  
 */
function endGame() {
    console.log("\n██████\n\nGame ended!")

    if (player0.length == 1) {
        console.log("You lose!");
        console.log("Your hand:");
        for (let k = 0; k < player0.length; k++) {
            console.log(player0[k].name);
        };
    } else if (player1.length == 1) {
        console.log("Player1 loses!");
    } else {
        console.log("Player2 loses!");
    }

    return;
}