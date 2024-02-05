import { resolve, parse } from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { OPERATION_FAILED } from "../../helpers/constants.js";
export const cp = async (path, newPath) => {
  if (!path || !newPath) {
    console.log("Please provide path and path where to copy");
    return;
  }
  const resolvedPath = resolve(path);
  const { base } = parse(resolvedPath);
  const whereToCopy = resolve(newPath, base);
  try {
    const readStream = createReadStream(resolvedPath);
    const writeStream = createWriteStream(whereToCopy);
    await pipeline(readStream, writeStream);
    console.log("File copied!");
  } catch (error) {
    console.log(OPERATION_FAILED, error);
  }
};
