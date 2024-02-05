import { add } from "../comands/fs/add.js";
import { cat } from "../comands/fs/cat.js";
import { cp } from "../comands/fs/cp.js";
import { mv } from "../comands/fs/mv.js";
import { remove } from "../comands/fs/rm.js";
import { rn } from "../comands/fs/rn.js";
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
    case "cat":
      cat(arg1);
      break;
    case "rn":
      rn(arg1, arg2);
      break;
    case "cp":
      cp(arg1, arg2);
      break;
    case "mv":
      mv(arg1, arg2);
      break;
    case "rm":
      remove(arg1);
      break;
    default:
      console.log(
        "There is no such command, try another one. Here is the at the top of that message"
      );
  }
};
