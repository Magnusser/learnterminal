import chalk from 'chalk';

function write(text) {
    process.stdout.write(text);
}

console.log(chalk.bgGreen.magenta('Mystic is a great class'));
console.log(chalk.italic('Mystic is a great class'));
console.log(chalk.bgGreen.magenta('Mystic is a great class'));
console.log(chalk.strikethrough('Mystic is a great class'));

console.log(boxen('box', {borderStyle: 'round'}))