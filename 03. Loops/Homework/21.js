var number = 2;
var suit, card;
var result = " ";
 
if (number >= 1 && number <= 52) {
    if (number % 4 === 0) {
        suit = "Clubs";
    } else if (number % 4 === 1) {
        suit = "Spades";
    } else if (number % 4 === 3) { 
        suit = "Hearts";
    } else if (number % 4 === 2) {
        suit = "Diamonds";
    }

    if (number <= 36) {
        card = Math.ceil(number / 4) + 1;
    } else if (number >= 37 && number <= 40) {
        card = "Jack";
    } else if (number >= 41 && number <= 44){
        card = "Queen";
    } else if (number >= 45 && number <= 48){
        card = "King";
    } else {
        card = "Ace";
    }

    console.log(`Selected card is ${card} of ${suit}.`);
} 

while (number <= 52) {
    number++
    if (number >= 1 && number <= 52) {
        if (number % 4 === 0) {
            suit = "Clubs";
        } else if (number % 4 === 1) {
            suit = "Spades";
        } else if (number % 4 === 3) {
            suit = "Hearts";
        } else if (number % 4 === 2) {
            suit = "Diamonds";
        }
        
        if (number <= 36) {
            card = Math.ceil(number / 4) + 1;
        } else if (number >= 37 && number <= 40) {
            card = "Jack";
        } else if (number >= 41 && number <= 44){
            card = "Queen";
        } else if (number >= 45 && number <= 48){
            card = "King";
        } else {
            card = "Ace";
        }
    
        result += card + ' ' + 'of' + ' ' + suit + "; ";

        console.log(result);
        result = " ";
       
    } 
    
}

