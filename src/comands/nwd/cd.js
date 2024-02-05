import { resolve } from "path";
import { chdir } from "process";

export const cd = (path) => {
  if (!path) {
    console.log("Provide the right path please");
    return;
  }

  try {
    chdir(resolve(path));
    console.log(`You are at ${process.cwd()}`);
  } catch (err) {
    console.log(`No such file or directory: ${err.dest}`);
  }
};
