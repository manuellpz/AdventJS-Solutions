const ornaments = "x";
const height = 3;

// function createChristmasTree(ornaments, height) {
//   let initialSpaces = 0;
//   let tree = "";
//   let ornamentsIndex = 0;
//   let aux = 0;

//   for (let i = 1; i <= height; i++) {
//     initialSpaces = " ".repeat(height - i);
//     let line = "";

//     for (let j = 0; j < i; j++) {
//       line += " " + ornaments[ornamentsIndex % ornaments.length];
//       ornamentsIndex++;
//     }
//     tree += initialSpaces + line.trim() + "\n";
//   }

//   tree += " ".repeat(height - 1) + "|\n";

//   return tree;
// }

function createChristmasTree(ornaments, height) {
  let initialSpaces = height - 1;
  let spaces = 0;
  let tree = "";
  let aux = 0;

  for (let i = 0; i < height; i++) {
    tree += " ".repeat(initialSpaces);

    aux =
      ornaments.length >= 2 &&
      tree[tree.length - (initialSpaces + 2)] === ornaments[0]
        ? 1
        : 0;

    for (let j = 0; j < i + 1; j++) {
      if (aux === ornaments.length) aux = 0;
      tree += ornaments[aux] + " ";
      aux++;
    }
    tree = tree.trimEnd() + "\n";
    spaces = 0;
    aux = 0;
    initialSpaces--;
  }

  tree += " ".repeat(height - 1) + "|\n";

  return tree;
}

console.log(createChristmasTree(ornaments, height));
