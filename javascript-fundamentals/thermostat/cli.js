const Thermostat = require('./thermostat');
thermostat1 = new Thermostat; 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var recursiveAsyncReadLine = function () {
    rl.question('Enter Command (Up, Down, PSM Off, PSM On)  ', (answer) => {
        console.log(answer)
        if (answer === 'Up') {
        console.log(thermostat1.up());
        }
        else if (answer === 'Down') {
        console.log(thermostat1.down());    
        }
        else if (answer === 'PSM Off') {
        console.log(thermostat1.setPowerSavingMode(false))    
        }
        else if (answer === 'PSM On') {
        console.log(thermostat1.setPowerSavingMode(true))    
        }
        recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();
