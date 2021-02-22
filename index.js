const readline = require('readline')
const consola = require('consola')
const { start } = require('repl')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
function askEvenNumber() {
  rl.question('Please insert an even number:  ', (answer) => {
    const number = parseInt(answer)

    if (isNaN(number)) {
      consola.error(` ${answer} is not a valid number`)
      askEvenNumber()
    } else if (number % 2 === 1) {
      consola.error(` ${answer} is an odd number`)
      askEvenNumber()
    } else if (number % 2 === 0) {
      consola.success(` Very good! ${answer} is an even number`)
      rl.close()
    }
  })
}

// da fare dentro package.json
start: 'node index.js'
/* su console
npm run start */
