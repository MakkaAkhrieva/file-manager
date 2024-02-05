import { rm } from "fs/promises";
import { resolve } from "path";
import { OPERATION_FAILED } from "../../helpers/constants.js";
export const remove = async (path) => {
  if (!path) {
    console.log("Please provide path to file to remove");
    return;
  }
  try {
    await rm(resolve(path));
    console.log(`File ${resolve(path)} is removed`);
  } catch (error) {
    console.log(OPERATION_FAILED, error);
  }
};
