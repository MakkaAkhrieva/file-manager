import { resolve, parse } from "path";
import { createWriteStream, createReadStream } from "fs";
import { createBrotliCompress } from "zlib";
import { pipeline } from "stream/promises";
import { isPathFile } from "../../helpers/isPathFile.js";
import { isDirectoryFile } from "../../helpers/isDirectoryFile.js";
import { OPERATION_FAILED } from "../../helpers/constants.js";

export const compress = async (path, newPath) => {
  if (!path || !newPath) {
    console.log("Please provide path and path where to compress");
    return;
  }
  try {
    const isFile = await isPathFile(path);
    const isDirectory = await isDirectoryFile(newPath);

    if (!isFile) {
      console.log("There is no such file that you want to compress");
      return;
    }

    if (!isDirectory) {
      console.log("There is no such directory where you want to compress");
    }

    const resolvedPath = resolve(path);
    const { base } = parse(resolvedPath);
    const pathToZip = resolve(newPath, `${base}.br`);
    const readableStream = createReadStream(resolvedPath);
    const writeableStream = createWriteStream(pathToZip);
    const brotli = createBrotliCompress();
    await pipeline(readableStream, brotli, writeableStream);
    console.log("File compressed");
  } catch (error) {
    console.log(OPERATION_FAILED);
  }
};
