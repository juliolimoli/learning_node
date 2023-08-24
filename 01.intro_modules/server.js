/*console.log("hello world")
console.log(global)
*/

const os = require('os')
const path = require('path')
const math = require('./math')
// or
const { sub } = require('./math')

console.log(math.add(3, 5))
// or
console.log(sub(3, 1))

/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
*/