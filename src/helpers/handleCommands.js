import {add} from "../comands/fs/add.js";
import { cd } from '../comands/nwd/cd.js';

export const handleCommands = async (line) => {
  const [command, arg1, arg2] = line.trim().split(" ");

  switch (command) {
    case "add":
      add(arg1);
      break;
    case "cd":
      cd(arg1);
      break;
    default:
      console.log("There is no such command, try another one. Here is the at the top of that message");
  }
};
