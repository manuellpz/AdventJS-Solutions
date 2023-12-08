function drawGift(size, symbol) {
   let draw = ''
   let counter = 0

   if (size === 1) return "#\n"

   for (let i = size - 2; i >= 0; i--) {
      for (let j = i; j >= 0; j--) {
         draw += ' '
      }
      if (i == size - 2) {
         draw += "#".repeat(size) + "\n"
      } else {
         draw += "#" + symbol.repeat(size - 2) + "#"
            + symbol.repeat(counter) + "#\n"
         counter++
      }

      if (i == 0) {
         for (let k = 0; k < size; k++) {
            if (k === 0) {
               draw += "#".repeat(size)
                  + symbol.repeat(counter) + "#\n"
               counter--
            }
            else if (k >= 1 && k < size - 1) {
               draw += "#"
                  + symbol.repeat(size - 2)
                  + "#" + symbol.repeat(counter) + "#\n"
               counter--
            }
            else {
               draw += "#".repeat(size) + "\n"
            }
         }
      }
   }

   return draw
}

console.log(drawGift(6,'*'))