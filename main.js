import boxen from 'boxen';
import chalk from 'chalk';

console.log(boxen('box', {borderStyle: 'round'}))
console.log(boxen(chalk.blue.bold('POOOWEEEEERRRRR'), {borderColor: 'blue' ,borderStyle: 'round', backgroundColor: 'cyan', width: 12, height: 12, title: 'Jeremy Fragrance'}))
console.log(boxen(chalk.red.bgCyan.italic('Morningstar'), {borderColor: 'red', borderStyle: 'classic', padding: 2, margin: 2, height: 18, width: 100, textAlignment: 'right', backgroundColor: 'yellow'}))
console.log(boxen(chalk.black.bold('Ippo'), {borderStyle: 'arrow', margin: 1, padding: 4, backgroundColor: 'blue'}))
console.log(boxen(chalk.bgRed('boxxx'), {borderStyle: 'doubleSingle', margin: 10, padding: 0, width: 80, backgroundColor: 'green'}))
console.log(boxen('boxer', {padding: 15, margin: 5, borderStyle: 'bold', title: 'boxing', titleAlignment: 'left'}));