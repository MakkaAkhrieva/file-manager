import { stat } from "node:fs/promises";
import { resolve } from "node:path";

export const isDirectoryFile = async (path) => {
  try {
    const statObject = await stat(resolve(path));
    return statObject.isDirectory();
  } catch {
    return false;
  }
};
