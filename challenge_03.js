const original = 'abcd'
const modified = 'abcde'

function findNaughtyStep(original, modified) {
   if (original === modified) return ''

   let mayor = (original.length > modified.length) ? original : modified

   let char = ''

   for(let i in mayor) {
      if(original[i] !== modified[i]) {
         char = mayor[i]
         break;
      }
   }
   return char
}

console.log(findNaughtyStep(original,modified))