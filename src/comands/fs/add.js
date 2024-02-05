import path from "path";
import fs from "fs/promises";

export const add = async (fileName) => {
  const filePath = path.join(`${process.cwd()}`, fileName);

  if (!fileName) {
    console.log("Please provide name of the file");
    return;
  }

  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch (err) {
    console.log(err.code);
    if (err.code === "ENOENT") {
      try {
        await fs.writeFile(filePath, "I am fresh and young", {flag: "wx"});
        console.log("File created successfully!");
      } catch (err) {
        throw err;
      }
    } else {
      throw err;
    }
  }
};

