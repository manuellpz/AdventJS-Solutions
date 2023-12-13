const road = "S..|...|..";
const time = 10;

function cyberReindeer(road, time) {
  let aux = "";
  let id = 0;
  let counter = 1;
  let steps = [road];
  let street = road.split("");

  for (let r of street) {
    if (time === 0) break;
    if (counter === 5) {
      street = street.map((el) => {
        if (el === "|") return "*";
        else return el;
      });
    }
    if (street[id + 1] === "|") {
      time--;
      counter++;
      steps.push(street.join(""));
      if(counter!==5) continue; 
    } 
      aux = r;
      street[id] = street[id + 1];
      street[id + 1] = aux;
      steps.push(street.join(""));
      time--;
      id++;
      counter++;
  }
  return steps;
}
console.log(cyberReindeer(road, time));
