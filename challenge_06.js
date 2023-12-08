const movements = '>***>'

function maxDistance(movements) {
   let result = 0
   let left = 0
   let right = 0

   movements.split('').forEach(el => {
      (el === '*') ? result++ : (el === '>') ? right++ : left++
   })
   result += (right > left) ? (right - left) : (left - right)

   return Math.abs(result)
}

console.log(maxDistance(movements))