console.log('[ GAME: Guess number ]')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let count = 1
let genNum = Math.round(Math.random() * 10)

console.log(`Ответ: "${genNum}"\n`)

const game = () => {
    if (count <= 3) {
        readline.question('Введите число от 0 до 10: ', user_number => {
            user_number = parseInt(user_number)
            console.log(`================= Попытка #${count} =================`)

            if (user_number === genNum) {
                console.log(`ВЫ УГАДАЛИ ЧИСЛО "${genNum}"!!!`)
                readline.close()
            } else if (user_number > genNum) {
                console.log(`Число "${user_number}" больше!\n`)
                ++count
                game()
            } else if (user_number < genNum) {
                console.log(`Число "${user_number}" меньше!\n`)
                ++count
                game()
            }
        })
    } else {
        console.log('Вы исчерпали лимит попыток =(')
        readline.close()
    }
}

game()
