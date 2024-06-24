/* 
██    ██  █████  ██████  ██  █████  ██████  ██      ███████ ███████ 
██    ██ ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██      ██      
██    ██ ███████ ██████  ██ ███████ ██████  ██      █████   ███████ 
 ██  ██  ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██           ██ 
  ████   ██   ██ ██   ██ ██ ██   ██ ██████  ███████ ███████ ███████ 
 */

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
    // {"name": "Q♠",  "rank": 11, "suit": 3},
    {"name": "K♠",  "rank": 12, "suit": 3}
]

let hand = [];
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
    toPlayer.unshift(deck[0]);
    fromPlayer.shift();
}

function findPairs(player) {
    player.sort((a,b) => a.rank - b.rank);
    let i = 0
    while(i < 51) {
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

function startGame() {
    if (deck.length > 3) {
        deal(deck, hand);
        deal(deck, player1);
        deal(deck, player2);
    } else if (deck.length > 2) {
        deal(deck, hand);
        deal(deck, player1);
    } else if (deck.length > 1) {
        deal(deck, hand);
    } else {
        return;
    }
    startGame();
}

/* 
 ██████  ██████  ███    ███ ███    ███  █████  ███    ██ ██████  ███████ 
██      ██    ██ ████  ████ ████  ████ ██   ██ ████   ██ ██   ██ ██      
██      ██    ██ ██ ████ ██ ██ ████ ██ ███████ ██ ██  ██ ██   ██ ███████ 
██      ██    ██ ██  ██  ██ ██  ██  ██ ██   ██ ██  ██ ██ ██   ██      ██ 
 ██████  ██████  ██      ██ ██      ██ ██   ██ ██   ████ ██████  ███████ 
 */

startGame();
console.log("Your hand:");
console.log(hand)
console.log("P1 hand:");
console.log(player1)
console.log("P2 hand:");
console.log(player2)
findPairs(hand);
findPairs(player1);
findPairs(player2);

let turn = 0;
while (turn < 17) {
    handsTurn();
    function handsTurn() {
        if (player1.length > 0) {
            deal(player1, hand);
            findPairs(hand);
            console.log("You took your turn!");
            console.log(hand);
            turn++
            p1sTurn();
        }
    }

    function p1sTurn() {
        if (player2.length > 0) {
            deal(player2, player1);
            findPairs(player1);
            console.log("Player 1 took their turn!");
            console.log(player1);
            turn++
            p2sTurn();
        }
    }

    function p2sTurn() {
        if (hand.length > 0) {
            deal(hand, player2);
            findPairs(player2);
            console.log("Player 2 took their turn!");
            console.log(player2);
            turn++
            handsTurn();
        }
    }
}

console.log("Your hand:");
console.log(hand)
console.log("P1 hand:");
console.log(player1)
console.log("P2 hand:");
console.log(player2)