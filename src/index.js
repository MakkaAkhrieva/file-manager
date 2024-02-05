import readline from "readline";
import {getUserName} from "./helpers/getUserName.js";
import {homedir} from "os";
import {handleCommands} from "./helpers/handleCommands.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const username = getUserName();

console.log(`Welcome to the File Manager, ${username}`);
console.log(`You are currently in ${homedir()}`);

rl.on("close", () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
});

rl.on("line", async (input) => {
  handleCommands(input);
  console.log(`You are currently in ${process.cwd()}`);
});
