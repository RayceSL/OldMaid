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
    toPlayer.unshift(fromPlayer[0]);
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
    deal(deck, hand);
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
findPairs(hand);
console.log("Your hand:");
console.log(hand);

findPairs(player1);
console.log("Player 1's hand:");
console.log(player1);

findPairs(player2);
console.log("Player 2's hand:");
console.log(player2);
/* 
████████ ██   ██ ███████     ██████  ██       █████  ██    ██ 
   ██    ██   ██ ██          ██   ██ ██      ██   ██  ██  ██  
   ██    ███████ █████       ██████  ██      ███████   ████   
   ██    ██   ██ ██          ██      ██      ██   ██    ██    
   ██    ██   ██ ███████     ██      ███████ ██   ██    ██    
 */

let turn = 1;
let triggerEnd = 0;

/* 
██    ██  ██████  ██    ██ ██████      ████████ ██    ██ ██████  ███    ██ 
 ██  ██  ██    ██ ██    ██ ██   ██        ██    ██    ██ ██   ██ ████   ██ 
  ████   ██    ██ ██    ██ ██████         ██    ██    ██ ██████  ██ ██  ██ 
   ██    ██    ██ ██    ██ ██   ██        ██    ██    ██ ██   ██ ██  ██ ██ 
   ██     ██████   ██████  ██   ██        ██     ██████  ██   ██ ██   ████ 
 */
   function handTurn() {
    console.log(`Turn: ${turn}.`);
    console.log("hand's hand:");
    console.log(hand);

    if (triggerEnd == 2) {
        console.log("The game has ended already, hand!");
        endGame();

    } else if (triggerEnd >= 3) {
        console.log("The game has already ended, hand, but somehow it should've ended a while ago...\nEnding game now!");

    } else if (player2.length == 1) {
        deal(player2, hand);
        console.log("hand took player2's last card!");

        if (hand.length >= 2) {
            findPairs(hand);
            console.log("hand pairs up their cards... ");
            console.log(hand);

            triggerEnd++;
            console.log(`Countdown to endgame: ${2 - triggerEnd}.`);

            console.log("hand passes the game to player1... ");
            turn++;
            player1Turn();

        } else if (hand.length == 1) {
            console.log("hand only has one card; no pairs are possible!\nhand passes the game to player1... ");

            triggerEnd++;
            console.log(`Countdown to endgame: ${2 - triggerEnd}.`);

            turn++;
            player1Turn();
        }

    } else if (player2.length > 1) {
        deal(player2, hand);
        console.log("hand took a card from player2's hand... ");

        if (hand.length >= 2) {
            findPairs(hand);
            console.log("hand pairs up their cards... ");
            console.log(hand);
            turn++;
            console.log("hand passes the game to player1... ");
            player1Turn();

        } else if (hand.length == 1) {
            console.log("hand only has one card; no pairs are possible!\nhand passes the game to player1... ");
            turn++;
            player1Turn();
        }

    } else if (player2.length <1) {
        console.log("player2 has no cards to take!?\nEnding the game!");
        endGame();

    } else {
        console.log("Something really weird happened... \nEnding the game now!");
        endGame();
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
    console.log(`Turn: ${turn}.`);
    console.log("player1's hand:");
    console.log(player1);

    if (triggerEnd == 2) {
        console.log("The game has ended already, player1!");
        endGame();

    } else if (triggerEnd >= 3) {
        console.log("The game has already ended, player1, but somehow it should've ended a while ago...\nEnding game now!");

    } else if (hand.length == 1) {
        deal(hand, player1);
        console.log("player1 took hand's last card!");

        if (player1.length >= 2) {
            findPairs(player1);
            console.log("player1 pairs up their cards... ");
            console.log(player1);

            triggerEnd++;
            console.log(`Countdown to endgame: ${2 - triggerEnd}.`);

            console.log("player1 passes the game to player2... ");
            turn++;
            player2Turn();

        } else if (player1.length == 1) {
            console.log("player1 only has one card; no pairs are possible!\nplayer1 passes the game to player2... ");

            triggerEnd++;
            console.log(`Countdown to endgame: ${2 - triggerEnd}.`);

            turn++;
            player2Turn();
        }

    } else if (hand.length > 1) {
        deal(hand, player1);
        console.log("player1 took a card from hand's hand... ");

        if (player1.length >= 2) {
            findPairs(player1);
            console.log("player1 pairs up their cards... ");
            console.log(player1);
            turn++;
            console.log("player1 passes the game to player2... ");
            player2Turn();

        } else if (player1.length == 1) {
            console.log("player1 only has one card; no pairs are possible!\nplayer1 passes the game to player2... ");
            turn++;
            player2Turn();
        }

    } else if (hand.length <1) {
        console.log("hand has no cards to take!?\nEnding the game!");
        endGame();

    } else {
        console.log("Something really weird happened... \nEnding the game now!");
        endGame();
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
    console.log(`Turn: ${turn}.`);
    console.log("player2's hand:");
    console.log(player2);

    if (triggerEnd == 2) {
        console.log("The game has ended already, player2!");
        endGame();

    } else if (triggerEnd >= 3) {
        console.log("The game has already ended, player2, but somehow it should've ended a while ago...\nEnding game now!");

    } else if (player1.length == 1) {
        deal(player1, player2);
        console.log("player2 took player1's last card!");

        if (player2.length >= 2) {
            findPairs(player2);
            console.log("player2 pairs up their cards... ");
            console.log(player2);

            triggerEnd++;
            console.log(`Countdown to endgame: ${2 - triggerEnd}.`);

            console.log("player2 passes the game to hand... ");
            turn++;
            handTurn();

        } else if (player2.length == 1) {
            console.log("player2 only has one card; no pairs are possible!\nplayer2 passes the game to hand... ");

            triggerEnd++;
            console.log(`Countdown to endgame: ${2 - triggerEnd}.`);

            turn++;
            handTurn();
        }

    } else if (player1.length > 1) {
        deal(player1, player2);
        console.log("player2 took a card from player1's hand... ");

        if (player2.length >= 2) {
            findPairs(player2);
            console.log("player2 pairs up their cards... ");
            console.log(player2);
            turn++;
            console.log("player2 passes the game to hand... ");
            handTurn();

        } else if (player2.length == 1) {
            console.log("player2 only has one card; no pairs are possible!\nplayer2 passes the game to hand... ");
            turn++;
            handTurn();
        }

    } else if (player1.length <1) {
        console.log("player1 has no cards to take!?\nEnding the game!");
        endGame();

    } else {
        console.log("Something really weird happened... \nEnding the game now!");
        endGame();
    }
}
/* 
███████ ████████  █████  ██████  ████████      ██████   █████  ███    ███ ███████ 
██         ██    ██   ██ ██   ██    ██        ██       ██   ██ ████  ████ ██      
███████    ██    ███████ ██████     ██        ██   ███ ███████ ██ ████ ██ █████   
     ██    ██    ██   ██ ██   ██    ██        ██    ██ ██   ██ ██  ██  ██ ██      
███████    ██    ██   ██ ██   ██    ██         ██████  ██   ██ ██      ██ ███████ 
 */
handTurn();
/* 
███████ ███    ██ ██████  
██      ████   ██ ██   ██ 
█████   ██ ██  ██ ██   ██ 
██      ██  ██ ██ ██   ██ 
███████ ██   ████ ██████  
 */
function endGame() {
    console.log("Game ended!")

    console.log("Your hand:");
    console.log(hand);

    console.log("Player 1's hand:");
    console.log(player1);

    console.log("Player 2's hand:");
    console.log(player2);

    return;
}