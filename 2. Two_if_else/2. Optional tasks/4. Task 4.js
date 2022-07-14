var currentDay = 15;
var currentMonth = 06;
var currentYear = 2022;

var leapYear = false;

var bigMonth = 31;
var smallMonth = 30;
var leapFebruary = 29;
var normalFebruary = 28;

// Проверка за високосна година
if (currentYear % 4 === 0) {
  if (currentYear % 100 === 0 && currentYear % 400 === 0) {
    leapYear = true;
  } else if (currentYear % 100 === 0) {
    leapYear = false;
  } else {
    leapYear = true;
  }
} else {
  leapYear = false;
}


if (leapYear) { 
  if (currentMonth === 01) {
    console.log(currentDay);
  } else if (currentMonth === 02) { // February
    console.log(1 * bigMonth + currentDay);
  } else if (currentMonth === 03) { // March
    console.log(1 * bigMonth + leapFebruary + currentDay);
  } else if (currentMonth === 04) { // April
    console.log(2 * bigMonth + leapFebruary + currentDay);
  } else if (currentMonth === 05) { // May
    console.log(2 * bigMonth + leapFebruary + smallMonth + currentDay);
  } else if (currentMonth === 06) { // June
    console.log(3 * bigMonth + leapFebruary + smallMonth + currentDay);
  } else if (currentMonth === 07) { // July
    console.log(3 * bigMonth + leapFebruary + 2 * smallMonth + currentDay);
  } else if (currentMonth === 08) { // August
    console.log(4 * bigMonth + leapFebruary + 2 * smallMonth + currentDay);
  } else if (currentMonth === 09) { // September
    console.log(5 * bigMonth + leapFebruary + 2 * smallMonth + currentDay);
  } else if (currentMonth === 10) { // Octomber
    console.log(5 * bigMonth + leapFebruary + 3 * smallMonth + currentDay);
  } else if (currentMonth === 11) { // November
    console.log(6 * bigMonth + leapFebruary + 3 * smallMonth + currentDay);
  } else if (currentMonth === 12) { // December
    console.log(6 * bigMonth + leapFebruary + 4 * smallMonth + currentDay);
  }
} else {
  if (currentMonth === 01) {
    console.log(currentDay);
  } else if (currentMonth === 02) { // February
    console.log(1 * bigMonth + currentDay);
  } else if (currentMonth === 03) { // March
    console.log(1 * bigMonth + normalFebruary + currentDay);
  } else if (currentMonth === 04) { // April
    console.log(2 * bigMonth + normalFebruary + currentDay);
  } else if (currentMonth === 05) { // May
    console.log(2 * bigMonth + normalFebruary + smallMonth + currentDay);
  } else if (currentMonth === 06) { // June
    console.log(3 * bigMonth + normalFebruary + smallMonth + currentDay);
  } else if (currentMonth === 07) { // July
    console.log(3 * bigMonth + normalFebruary + 2 * smallMonth + currentDay);
  } else if (currentMonth === 08) { // August
    console.log(4 * bigMonth + normalFebruary + 2 * smallMonth + currentDay);
  } else if (currentMonth === 09) { // September
    console.log(5 * bigMonth + normalFebruary + 2 * smallMonth + currentDay);
  } else if (currentMonth === 10) { // Octomber
    console.log(5 * bigMonth + normalFebruary + 3 * smallMonth + currentDay);
  } else if (currentMonth === 11) { // November
    console.log(6 * bigMonth + normalFebruary + 3 * smallMonth + currentDay);
  } else if (currentMonth === 12) {
    console.log(6 * bigMonth + normalFebruary + 4 * smallMonth + currentDay);
  }
}

