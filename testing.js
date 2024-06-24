let hand = [
    { name: '10♣', rank: 9, suit: 2 },
    { name: 'J♦', rank: 10, suit: 1 },
    { name: '6♣', rank: 5, suit: 2 },
    { name: 'A♥', rank: 0, suit: 0 },
    { name: '4♣', rank: 3, suit: 2 },
    { name: '5♦', rank: 4, suit: 1 },
    { name: '6♦', rank: 5, suit: 1 },
    { name: '7♦', rank: 6, suit: 1 },
    { name: '9♣', rank: 8, suit: 2 }
];

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

console.log(hand);
findPairs(hand);
console.log(hand);