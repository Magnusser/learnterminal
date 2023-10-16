import boxen from 'boxen';
import chalk from 'chalk';
import readline from 'readline';
function write(text) {
    process.stdout.write(text);
}

readline.emitKeypressEvents(process.stdin);

if(process.stdin.isTTY){
    process.stdin.setRawMode(true);
}



write('@');

process.stdin.on('keypress', (chunk, key)=>{
    if(key && key.name === 'c' && key.ctrl === true){
        process.exit();
    }
    if(key && key.name === 'd'){
        write('\x1B[1D');
        write(' @');
    }
    if(key && key.name === 's'){
        write('\x1B[1D');
        write(' ');
        write('\x1B[1D');
        write('\x1B[1B');
        write('@');
    }
    if(key && key.name === 'a'){
        write('\x1B[2C');
        write('@ ');
        write('\x1B[1D');
    }
    if(key && key.name === 's'){
        write('\x1B[1D');
        write(' ');
        write('\x1B[1D');
        write('\x1B[1A');
        write('@');
    }
});