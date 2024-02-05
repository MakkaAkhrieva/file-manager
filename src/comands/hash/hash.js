import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { resolve } from "path";
import { OPERATION_FAILED } from "../../helpers/constants.js";

export const hash = async (path) => {
  if (!path) {
    console.log("Please provide path");
    return;
  }
  try {
    const content = await readFile(resolve(path));
    const data = createHash("sha256").update(content);
    console.log(data.digest("hex"));
  } catch {
    console.log(OPERATION_FAILED);
  }
};
