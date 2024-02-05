import { EOL, cpus, userInfo, arch } from "os";

export const osHandlers = {
  eol: () => {
    console.log(JSON.stringify(EOL));
  },
  cpus: () => {
    const result = cpus().map(({ model, speed }) => {
      return { model, frequency: `${(speed / 1000).toFixed(1)} GHz` };
    });
    console.table(result);
  },
  homedir: () => {
    console.log(userInfo().homedir);
  },
  userName: () => {
    console.log(userInfo().username);
  },
  architecture: () => {
    console.log(arch());
  },
};
