import { username } from "../index.js";

export const close = () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
};
