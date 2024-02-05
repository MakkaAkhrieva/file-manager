import { resolve, parse } from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { rm } from "fs/promises";
import { OPERATION_FAILED } from "../../helpers/constants.js";
export const mv = async (oldPath, newPath) => {
  if (!oldPath || !newPath) {
    console.log("Please provide old path and new path");
    return;
  }
  const oldResolvedPath = resolve(oldPath);
  const { base } = parse(oldResolvedPath);
  const newResolvedPath = resolve(newPath, base);
  try {
    const readStream = createReadStream(oldResolvedPath);
    const writeStream = createWriteStream(newResolvedPath);
    await pipeline(readStream, writeStream);
    await rm(oldResolvedPath);
    console.log(`File ${oldResolvedPath} moved to ${newResolvedPath}`);
  } catch (error) {
    console.log(OPERATION_FAILED, error);
  }
};
