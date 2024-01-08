import yargs, { options } from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    default: 5,
    describe: "Mutiplication table base",
  })
  .option("l", {
    alias: "list",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show multiplication table",
  })

  .option("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "multiplication-table",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })

  .check((argv, options) => {
    if (argv.b < 1) throw "Error: base must be greather than 0";
    return true;
  })
  .parseSync();
