let firstWord = "pineapple";
let secondWord = "pomegranate";
let length;

if (typeof firstWord === "string" && typeof secondWord === "string") {
    if (firstWord.length > 7 && firstWord.length <20
        && secondWord.length > 7 && secondWord.length <20) {
        var newSecondWord = firstWord.slice(0,5) + secondWord.slice(5)
        var newFirstWord = secondWord.slice(0,5) + firstWord.slice(5)
            if (newFirstWord.length > secondWord.length) {
                length = firstWord.length
            } else {
                length = secondWord.length
            }

        console.log(`${length}, ${newFirstWord}, ${newSecondWord}`);

    } else {
        console.log(`Моля, въведете дума с дължина между 7 и 20 знака.`);
    }
} else {
    console.log(`Моля, въведете дума.`);
}


