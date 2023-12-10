const lights = ["🟢", "🔴", "🔴", "🟢", "🔴", "🟢", "🔴", "🔴", "🔴"];

// function adjustLights(lights) {
//   const options = ["🔴", "🟢"];
//   let counter = 0;

//   lights = lights.reverse();

//   for (let i = 0; i < lights.length; i++) {
//     if (lights[i] === lights[i + 1]) {
//       counter++;
//       lights[i + 1] = lights[i] === options[0] ? options[0] : options[1];
//     }
//   }

//   return counter;
// }

//   return counter;
// }

function adjustLights(lights) {
  const leds = {
    "🔴": "🟢",
    "🟢": "🔴",
  };

  let counter = 0;
  let id = 0;
  lights = lights.reverse();

  for (let light of lights) {
    if (light === lights[id + 1]) {
      counter++;
      lights[id + 1] = leds[light];
    }
    id++;
  }
  return counter;
}
console.log(adjustLights(lights));
