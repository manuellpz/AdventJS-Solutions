const gifts = [2,1,3,5,3,2]


const findFirstRepeatedId = gifts => {
   // let idxs = []
   // let positions = []

   // positions = gifts.filter((el, idx) => gifts.indexOf(el, idx + 1) !== -1)
   // if (positions.length === 0) return -1

   // positions.forEach((el, idx) => {
   //    idxs.push(gifts.indexOf(el, idx + 1))
   // })
   // idxs.sort((a, b) => a - b)
   // return gifts[idxs[0]]
   let positions = []
   gifts.forEach((el,idx) => {
      let id = gifts.indexOf(el,idx+1) !== -1
      if(id) positions.push(gifts.indexOf(el,idx+1))
   })
   return gifts?.[positions.sort()[0]] ?? -1
}

console.log(findFirstRepeatedId(gifts))