import { resolve, parse } from "path";
import { createWriteStream, createReadStream } from "fs";
import { createBrotliDecompress } from "zlib";
import { pipeline } from "stream/promises";
import { isPathFile } from "../../helpers/isPathFile.js";
import { isDirectoryFile } from "../../helpers/isDirectoryFile.js";
import { OPERATION_FAILED } from "../../helpers/constants.js";

export const decompress = async (path, newPath) => {
  if (!path || !newPath) {
    console.log("Please provide path and path where to decompress");
    return;
  }
  try {
    const isFile = await isPathFile(path);
    const isDirectory = await isDirectoryFile(newPath);

    if (!isFile) {
      console.log("There is no such file that you want to decompress");
      return;
    }

    if (!isDirectory) {
      console.log("There is no such directory where you want to decompress");
    }
    const resolvedPath = resolve(path);
    const { name } = parse(resolvedPath);
    const pathToUnzip = resolve(newPath, name);
    const readableStream = createReadStream(resolvedPath);
    const writeableStream = createWriteStream(pathToUnzip);
    const brotli = createBrotliDecompress();
    await pipeline(readableStream, brotli, writeableStream);
    console.log("File decompressed");
  } catch (error) {
    console.log(error);
    console.log(OPERATION_FAILED);
  }
};

export default decompress;
