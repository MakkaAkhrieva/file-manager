import { dirname, resolve } from "path";
import { rename as generateName } from "fs/promises";
import { OPERATION_FAILED } from "../../helpers/constants.js";
export const rn = async (oldPath, newPath) => {
  if (!oldPath || !newPath) {
    console.log("Please provide old path and new path");
    return;
  }
  const oldResolvedPath = resolve(oldPath);
  const newResolvedPath = resolve(dirname(oldResolvedPath), newPath);
  try {
    await generateName(oldResolvedPath, newResolvedPath);
    console.log(`File ${oldResolvedPath} renamed to ${newResolvedPath}`);
  } catch (error) {
    console.log(OPERATION_FAILED);
  }
};
