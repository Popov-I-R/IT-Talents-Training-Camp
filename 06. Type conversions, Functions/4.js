let names = "Anna Dosewa Asenowa, Iwo Peew Peew".split(",");
let firstName = names[0];
let secondName = names[1];

let sumCharFirstName = 0;
let sumCharSecondName = 0;

for (let i = 0; i < firstName.length; i++) {
  sumCharFirstName = sumCharFirstName + firstName[i].charCodeAt();
}

for (let j = 0; j < secondName.length; j++) {
  sumCharSecondName = sumCharSecondName + secondName[j].charCodeAt();
}

console.log(sumCharFirstName > sumCharSecondName ? firstName : secondName);
