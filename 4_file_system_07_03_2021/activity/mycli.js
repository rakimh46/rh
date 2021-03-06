// view
// tree
// flat
// organize
// help
let viewfnObj = require("./commands/view");
let helpfnObj = require("./commands/help");
let organizefnObj = require("./commands/organize");

let input = process.argv.slice(2);
let cmd = input[0]
// console.log(input);
// console.log(input);

switch (cmd) {
    case "view":
        //view as tree
        // view as flat 
        // recursion
        viewfnObj.viewfn(input[1], input[2])
        break;
    case "organize":
        organizefnObj.organizeFn(input[1]);
        break;
    case "help":
        helpfnObj.helpFn();
        break;
    default:
        console.log("Wrong command. Type help to see the list of all the commands");
}