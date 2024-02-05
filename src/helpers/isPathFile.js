import { stat } from "node:fs/promises";
import { resolve } from "node:path";
export const isPathFile = async (path) => {
  try {
    const statObject = await stat(resolve(path));
    return statObject.isFile();
  } catch (error) {
    return false;
  }
};
