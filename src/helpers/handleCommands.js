import { add } from "../comands/fs/add.js";
import { cd } from "../comands/nwd/cd.js";
import { ls } from "../comands/nwd/ls.js";
import { up } from "../comands/nwd/up.js";
import { close } from "./closeHandler.js";

export const handleCommands = async (line) => {
  const [command, arg1, arg2] = line.trim().split(" ");

  switch (command) {
    case "add":
      add(arg1);
      break;
    case "cd":
      cd(arg1);
      break;
    case "up":
      up();
      break;
    case "ls":
      ls();
      break;
    case ".exit":
      close();
      break;
    default:
      console.log(
        "There is no such command, try another one. Here is the at the top of that message"
      );
  }
};
