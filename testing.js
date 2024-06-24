let hand = [
    { name: '10♣', rank: 9, suit: 2 }
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

console.log(hand.length);
console.log(hand);
findPairs(hand);
console.log(hand);