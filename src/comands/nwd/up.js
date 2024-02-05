import { chdir } from "process";

export const up = () => {
  try {
    chdir("../");
    console.log(`You are at ${process.cwd()}`);
  } catch {
    throw new Error("Operation failed");
  }
};
