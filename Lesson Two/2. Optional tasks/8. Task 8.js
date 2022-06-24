var xa = -1.5;
var ya = -2.5;

if (xa > 0 && ya > 0) {
    console.log('Квадрант 1');
} else if (xa < 0 && ya > 0) {
    console.log(`Квадрант 2`);
} else if (xa < 0 && ya < 0) {
    console.log('Квадрант 3');
} else if (xa > 0 && ya < 0) {
    console.log(`Квадрант 4`);
}

/*
Формула:
Квадрант 1: xa > 0, ya > 0
Квадрант 2: xa < 0, ya > 0
Квадрант 3: xa < 0, ya < 0
Квадрант 4: xa > 0, ya < 0
*/