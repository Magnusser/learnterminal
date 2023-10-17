import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv;

yargs.command({
    command: 'add',
    describe: 'adds two numbers',
    builder: {
        value1: {
            describe: 'value 1',
            demandOption: true,
            type: 'number',
        },
        value2: {
            describe: 'value 1',
            demandOption: true,
            type: 'number',
        },
    },
    handler: (argv) => {
        console.log(argv.value1 + ' ' + argv.sign + ' ' + argv.value2 + ' = ' );
    }
});

yargs.parse();
