import {INVALID_INPUT} from "./constants.js";

export const getUserName = () => {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0].startsWith("--username=")) {
    return args[0].substring(11);
  } else {
    console.log(INVALID_INPUT);
  }
};
