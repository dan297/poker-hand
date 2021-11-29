/**
 * @typedef {Object} Card
 * @property {string} suits - Suit of the card - Either "club", "spade", "diamond" or "heart"
 * @property {number} ranks - Number rank of the card - So 1 for Ace, 2 for Two, 3 for Three, and so on, until 10 for Ten, then 11 for Jack, 12 for Queen and 13 for King
 */

/**
 * Given a poker hand of 5 cards, examines the cards and returns a string describing the type of win.
 *
 * @param {Array.<Card>} hand - Array of the card objects that make up the poker hand.
 * @returns {string} - Returns a string for the type of the win detected:
 *		"highcard" - Five cards which do not form any of the combinations below
 *		"pair" - A hand with two cards of equal rank and three cards which are different from these and from each other
 *		"twopair" - A hand with two pairs of different ranks
 *		"threeofakind" - Three cards of the same rank plus two unequal cards
 *		"straight" - Five cards of mixed suits in sequence
 *		"flush" - Five cards of the same suit
 *		"fullhouse" - Three cards of one rank and two cards of another rank
 *		"fourofakind" - Four cards of the same rank and the fifth card can be anything
 *		"straightflush" - Five cards of the same suit in sequence
 *		"royalflush" - A 10, Jack, Queen, King and Ace ranked cards of the same suit
 */
function evaluatePokerHand(hand) {
  // Here is an example of how to access the card data. You may wish to use this for debugging purposes.
  // You can delete this for loop or modify it for your own purposes

  if (hand.length != 5) {
    console.log("Incorrect number of cards.");
  } else {
    var suits = [];
    var ranks = [];
    for (i = 0; i < hand.length; i++) {
      var card = hand[i];

      console.log(`Card ${i + 1}: ${card.suit} x ${card.rank}`);
    }

    if (
      ranks.includes("1") &&
      ranks.includes("10") &&
      ranks.includes("11") &&
      ranks.includes("13") &&
      ranks.includes("12") &&
      containsFlush(suits)
    ) {
      console.log("Royal Flush");
      return "royalflush";
    }
    // } else if (containsFlush(suits) && containsStraight(ranks)) {
    //   console.log("Straight Flush");
    // } else if (containsFourOfAKind(ranks)) {
    //   console.log("Four of a Kind");
    // } else if (containsFullHouse(ranks)) {
    //   console.log("Full House");
    // } else if (containsFlush(suits)) {
    //   console.log("Flush");
    // } else if (containsStraight(ranks)) {
    //   console.log("Straight");
    // } else if (containsThreeOfAKind(ranks)) {
    //   console.log("Three of a Kind");
    // } else if (containsTwoPair(ranks)) {
    //   console.log("Two Pair");
    // } else if (containsPair(ranks)) {
    //   console.log("Pair");
    // } else {
    //   console.log("High Card");
    // }
  }

  return "c";
}

// TODO: Put your evaluation code here.

function containsFlush(hand) {
  if (
    hand[0] == hand[1] &&
    hand[1] == hand[2] &&
    hand[2] == hand[3] &&
    hand[3] == hand[4]
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = evaluatePokerHand;
