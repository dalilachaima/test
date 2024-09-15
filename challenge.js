//challenge 1:
let message = "There is no war in Ba Sing Se";
console.log(message.split(" "));
let x = message.split(" ");
let word = 0;
for (let i = 0; i < x.length; i++) {
  word += 1;
}
console.log(word);
console.log(x.length);

//chalenge 2:
let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];
for (let i = 0; i < capital.length; i++) {
  console.log(countries[i], "has the capital named : ", capital[i]);
}

// challenge 3:
let randomizer = 2;
if (randomizer === 0) {
  console.log("A certain victory");
} else if (randomizer === 1) {
  console.log("not so certain victory");
} else if (randomizer === 2) {
  console.log("an uneasy victory");
} else {
  console.log("Your fate is unclear, ô chosen undead");
}
//challenge 4:
function checkSeason(month) {
  if (month > 3 && month <= 6) {
    let season = "Spring";
  } else if (month > 6 && month <= 9) {
    let season = "Summer";
  } else if (month > 9 && month <= 12) {
    let season = "Autumn";
  } else if (month > 1 && month <= 3) {
    let season = "Winter";
  }
  return season;
  console.log(season);
}
console.log(season);
checkSeason(4);
console.log(season);
