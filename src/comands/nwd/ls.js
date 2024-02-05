import { readdir } from "fs/promises";
import { resolve } from "path";

export const ls = async () => {
  try {
    const directoryContents = await readdir(resolve(process.cwd()), {
      withFileTypes: true,
    });

    const directories = [...directoryContents]
      .filter((directoryEntry) => directoryEntry.isDirectory())
      .map((directoryEntry) => directoryEntry.name)
      .sort();

    const files = [...directoryContents]
      .filter((directoryEntry) => directoryEntry.isFile())
      .map((directoryEntry) => directoryEntry.name)
      .sort();

    const filesAndDirectories = [];
    directories.forEach((directory) => {
      filesAndDirectories.push({ Name: directory, Type: "Directory" });
    });
    files.forEach((file) => {
      filesAndDirectories.push({ Name: file, Type: "File" });
    });

    console.table(filesAndDirectories);
  } catch (error) {
    console.log("Operation failed");
    console.log(error);
  }
};
