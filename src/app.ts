import { yarg } from "./config/plugins/args.plugins";
import { ServerApp } from "./presentation/serve-app";

(async () => {
  await main();
  console.log("fin de programa");
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;
  ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}
