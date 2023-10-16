import boxen from 'boxen';
import chalk from 'chalk';
import readline from 'readline';
import inquirer from 'inquirer';
function write(text) {
    process.stdout.write(text);
}

readline.emitKeypressEvents(process.stdin);

if(process.stdin.isTTY){
    process.stdin.setRawMode(true);
}

const GayOrStraight = async (input) => {
    if(input !== 'n' || input !== 'y') {
        return 'Stop the cap'
    }
}
const questions = [
    {type:'editor', name:'code', message:'How you doing?', 
    validate(text) {
        if (text.split('\n').length < 3) {
          return 'Must be at least 3 lines.';
        }
  
        return true;
      },
      waitUserInput: true,
    },
];
inquirer.prompt([
    {type:'input', name:'name', message:'What is your name lil bro?'},
    {
        type:'list',
        name:'gender', 
        message:'What is your pronouns lil bro?', 
        choices: ['male', 'female', 'fluid', 'none', 'some other thing']
    },
    {type:'rawlist', 
    name:'number', 
    message:'Pick a damn number', 
    choices:['4','2','5','1','3']},
    {type:'confirm', name:'homo', message:'You gay?', validate: GayOrStraight},
    {type:'checkbox', name:'love', message:'Have you ever fallen in love?', choices: ['yes', 'no']},
    {type:'password', name:'codeword', message:'Say the word.'},
    {type:'number', name:'number2', message:'Pick a damn number AGAIN'},
    {type:'expand', name:'friends', message:'Yu got any friends?', choices:[
        {
            key:'y',
            name:'Friends',
            value:'Got friends',
        },
        {
            key:'n',
            name:'No friends',
            value:'Lonely bitch'
        }
    ]},
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {

    } else {
        
    }
  });