/* Each card is given a PIN---the logic is:
Rank first, A--K correspondes to 1--13
Suits: Hearts (0.1)--Diamonds (0.2)--Clubs (0.3)--Spades (0.4)
For instance, the Ace of Spades's PIN is 1.4, the Queen of Hearts is 12.1, &c. */

// Removed the Q♠ as per Bicycle's instruction
let deck = [
    "A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥", 
    "A♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦", 
    "A♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣", 
    "A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "K♠"
];

// Note: Players should be in a 2D array?
let hand = [];
let tableau = [];
let player1 = [];
let player2 = [];

function swapCard(array, indexA, indexB) {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
}

function drawCard() {
    let randIndex = (Math.floor(Math.random() * deck.length));
    let randCard = deck[randIndex];
    console.log(`Shuffling deck...\nDrew the ${randCard}.`);
    swapCard(deck, randIndex, 0);
    // Took this guy's code: https://stackoverflow.com/a/23921775/25562183
/*     deck.sort(
        function(x,y) {
            return x == randCard ? -1 : y == randCard ? 1 : 0;
        }
    ); */
    return;
}

function deal() {
    hand.unshift(deck[0]);
    deck.shift();
    return;
}

function findPair() {
    if (hand.indexOf("A♥") != -1) {
        console.log("Found the A♥");
        swapCard(hand, hand.indexOf("A♥"), 0)
    } else if (hand.indexOf("A♦") != -1) {
        console.log("Found the A♦");
    } else if (hand.indexOf("A♣") != -1) {
        console.log("Found the A♣");
    } else if (hand.indexOf("A♠") != -1) {
        console.log("Found the A♠");
    }
}

console.log(deck);
drawCard();
deal();
drawCard();
deal();
drawCard();
deal();
drawCard();
deal();
drawCard();
deal();
drawCard();
deal();
drawCard();
deal();
drawCard();
deal();
drawCard();
deal();
drawCard();
deal();
console.log(hand);
findPair();
console.log(hand);