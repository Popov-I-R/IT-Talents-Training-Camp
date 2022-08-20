var hour = 1;
var money = 5.50
var sick = true;

if (sick) {
    if (money > 0) {
        console.log(`Im sick, but i have money, so i will buy medicine.`);
    } else {
        console.log('Im sick, but i dont have money, so i will stay at home drinking tea.');
    };
} else {
    if (money < 10) {
        console.log(`Im in good health and i have less than 10 leva, so i will go to the coffee.`);
    }
};
