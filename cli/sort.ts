import JSON from "json5";
import { sort } from "../src/sort";

const argObject = JSON.parse(process.argv[2]);
console.info('Input: ', argObject);
console.log('Stack: ', sort(argObject));