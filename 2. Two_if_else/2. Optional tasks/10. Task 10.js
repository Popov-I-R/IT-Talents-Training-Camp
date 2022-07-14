var n = 52;

var memory = Math.ceil(n / 2);
var memory2 =  Math.ceil(memory / 2) + 1;

if (n === 1 || n === 5 || n === 9 || n === 13 || n === 17 || n === 21 || n === 25 || n === 29 || n === 33 || n === 37 || n === 41 || n === 45 || n === 49) {
    
    if (n === 37) {
        console.log(`clubs J`);
    } else if (n === 41) {
        console.log(`clubs Q `);
    } else if (n === 45) {
        console.log(`clubs K `);
    } else if (n === 49) {
        console.log(`clubs A `);
    } else {
        console.log(`clubs`, memory2);
    }
} 

if (n === 2 || n === 6 || n === 10 || n === 14 || n === 18 || n === 22 || n === 26 || n === 30 || n === 34 || n === 38 || n === 42 || n === 46 || n === 50) {
    
    if (n === 38) {
        console.log(`diamond J`);
    } else if (n === 42) {
        console.log(`diamond Q `);
    } else if (n === 46) {
        console.log(`diamond K `);
    } else if (n === 50) {
        console.log(`diamond A `);
    } else {
        console.log(`diamond`, memory2);
    }
}

if (n === 3 || n === 7 || n === 11 || n === 15 || n === 19 || n === 23 || n === 27 || n === 31 || n === 35 || n === 39 || n === 43 || n === 47 || n === 51) {
    
    if (n === 39) {
        console.log(`hearts J`);
    } else if (n === 43) {
        console.log(`hearts Q `);
    } else if (n === 47) {
        console.log(`hearts K `);
    } else if (n === 51) {
        console.log(`hearts A `);
    } else {
        console.log(`hearts`, memory2);
    }
}

if (n === 4 || n === 8 || n === 12 || n === 16 || n === 20 || n === 24 || n === 28 || n === 32 || n === 36 || n === 40 || n === 44 || n === 48 || n === 52) {
    
    if (n === 40) {
        console.log(`spade J`);
    } else if (n === 44) {
        console.log(`spade Q `);
    } else if (n === 48) {
        console.log(`spade K `);
    } else if (n === 52) {
        console.log(`spade A `);
    } else {
        console.log(`spade`, memory2);
    }
}


