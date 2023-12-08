let message = '(olleh) (dlrow)!'

function decode(message) {
   let test = message.trim().split('(')
   let result = ''
   let aux = ''

   test.forEach(el => {
      if(el.includes(')') || el.includes('(')) {
         aux = el.split('').reverse().filter(c => c !== ")").join('')
         result += aux

         console.log(result)
      }else {
         result += el
      }
   })

   return result
}

console.log(decode(message))