const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

// const manufacture = (gifts,materials) => {
//    let presents = []

//    gifts.forEach(gift => {
//      if(canMakeIt(gift,materials))
//       presents.push(gift)
//    })

//    return presents
// }

// const canMakeIt = (gift,materials) => {
//    let valid = true
//    gift.split('').forEach(g => {
//       if(materials.includes(g) === false)
//          valid = false
//    })
//    return valid
// }

function manufacture(gifts,materials) {
  let presents = []
  
  presents = gifts.filter(el => el.match(`^[${materials}]+${"$"}`))

  return presents
}

console.log(manufacture(gifts,materials))