/* 
Над всеки 5 звезди има човече, а на 6тата отива нагоре
покачва с по 3 реда, като третия е започващият на следващите 5 на страни

//1. Първо си правя патърнчето за да мога после да си го ползвам колкото пъти искам.
    външен цикъл със:
    дължина - 6
    височина- 4
        1.2 Вътре в него :
            1.2.1 по дължина
             ред 1 -     само звезди
             ред 2 - на  индекс 2 и 4 съответно / и \
             ред 3 - на индекс 2,3 и 4 съответно /|\
             ред 4 - на индекс 3 - нещо, като глава
  2. Да умножа lenght * колкото пъти е нужно според зависи от етажите за да мога накрая да принтирам звездите по-лесно, а всичко останало да е празно място.

  * След като направя патърнчето първо да опитам да го loop-на някак, като на всеки loop увеличавам space-a отпред. - Опитах, не се получи. 
                
*/

var lenght = 6;
var height = 4;
var result = "";


//--------------------------------- Трети етаж ---------------------------------


for (var i = 1; i <= height; i++) {
  // if za горна част, който да води към цикъл за глава
  if (i === 1) {
    for (var head = 1; head <= lenght*4; head++) {
      // цикъл за глава (първи ред)
      if (head === 15) {
        result += "~";
      } else if (head === 18) {
        result += "*";
      } else if (head >=19 & head < lenght*4) {
        result += "*"
      } else if (head === lenght*4) {
        result += "*"
      } else {
        result += " ";
      }
    }
  } else if (i === 2) {
    // If За ръце и тяло
    for (var handsBody = 1; handsBody <= lenght*4; handsBody++) {
      // Цикъл ръце и тяло
      if (handsBody === 14) {
        result += "/"; // лява ръка
      } else if (handsBody === 16) {
        result += `\\`; // дясна ръка
      } else if (handsBody === 15) {
        result += "|";
      } else if (handsBody === 18) {
        result += "*";
      } else if (handsBody === lenght*4) {
        result += "*"
      } else {
        // тяло
        result += " ";
      }
    }
  } else if (i === 3) {
    // IF за крака
    //  цикъл за краката
    for (var feets = 1; feets <= lenght*4; feets++) {
      if (feets === 14) {
        result += "/"; // ляв крак
      } else if (feets === 16) {
        result += "\\"; // десен крак
      } else if (feets === 18) {
        result += "*";
      } else if (feets === lenght*4) {
        result += "*"
      } else {
        // край
        result += " ";
      }
    }
  } else if (i === height) {
    // IF за пода
    for (var floor = 1; floor <= lenght*4; floor++) {
      if (floor >=12 && floor <=18) {
        result += "*";
      } else if (floor === lenght*4) {
        result += "*"
      }else {
        result += " "
      }
      // Цикъл за пода
      
    }
  }
  
  console.log(result);
  result = "";
}


//--------------------------------- Втори етаж ---------------------------------


// външен цикъл за височина
for (var i = 1; i <= height; i++) {
  // if za горна част, който да води към цикъл за глава
  if (i === 1) {
    for (var head = 1; head <= lenght*4; head++) {
      // цикъл за глава (първи ред)
      if (head === 9) {
        result += "~";
      } else if (head === 12) {
        result += "*";
      } else if (head === lenght*4) {
        result += "*"
      } else {
        result += " ";
      }
    }
  } else if (i === 2) {
    // If За ръце и тяло
    for (var handsBody = 1; handsBody <= lenght*4; handsBody++) {
      // Цикъл ръце и тяло
      if (handsBody === 8) {
        result += "/"; // лява ръка
      } else if (handsBody === 10) {
        result += `\\`; // дясна ръка
      } else if (handsBody === 9) {
        result += "|";
      } else if (handsBody === 12) {
        result += "*";
      } else if (handsBody === lenght*4) {
        result += "*"
      } else {
        // тяло
        result += " ";
      }
    }
  } else if (i === 3) {
    // IF за крака
    //  цикъл за краката
    for (var feets = 1; feets <= lenght*4; feets++) {
      if (feets === 8) {
        result += "/"; // ляв крак
      } else if (feets === 10) {
        result += "\\"; // десен крак
      } else if (feets === 12) {
        result += "*";
      } else if (feets === lenght*4) {
        result += "*"
      }else {
        // край
        result += " ";
      }
    }
  } else if (i === height) {
    // IF за пода
    for (var floor = 1; floor <= lenght*4; floor++) {
      if (floor >=6 && floor <= 12) {
        result += "*";
      } else if (floor === lenght*4) {
        result += "*"
      } else {
        result += " "
      }
      // Цикъл за пода
      
    }
  }
 
  console.log(result);
  result = "";
}


//--------------------------------- Първи етаж ---------------------------------

for (var i = 1; i <= height; i++) {
  // if za горна част, който да води към цикъл за глава
  if (i === 1) {
    for (var head = 1; head <= lenght*4; head++) {
      // цикъл за глава (първи ред)
      if (head === 3) {
        result += "~";
      } else if (head === 6) {
        result += "*";
      } else if (head === lenght*4) {
        result += "*"
      } else {
        result += " ";
      }
    }
  } else if (i === 2) {
    // If За ръце и тяло
    for (var handsBody = 1; handsBody <= lenght*4; handsBody++) {
      // Цикъл ръце и тяло
      if (handsBody === 2) {
        result += "/"; // лява ръка
      } else if (handsBody === 4) {
        result += `\\`; // дясна ръка
      } else if (handsBody === 3) {
        result += "|";
      } else if (handsBody === 6) {
        result += "*";
      } else if (handsBody === lenght*4) {
        result += "*"
      } else {
        // тяло
        result += " ";
      }
    }
  } else if (i === 3) {
    // IF за крака
    //  цикъл за краката
    for (var feets = 1; feets <= lenght*4; feets++) {
      if (feets === 2) {
        result += "/"; // ляв крак
      } else if (feets === 4) {
        result += "\\"; // десен крак
      } else if (feets === 6) {
        result += "*";
      } else if (feets === lenght*4) {
        result += "*"
      }else {
        // край
        result += " ";
      }
    }
  } else if (i === height) {
    // IF за пода
    for (var floor = 1; floor <= lenght*4; floor++) {
      // Цикъл за пода
      result += "*";
    }
  }
  
  console.log(result);
  result = "";
}