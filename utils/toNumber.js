#!/usr/bin/env node

// Raycast Script Command Template
//
// Dependency: This script requires Nodejs.
// Install Node: https://nodejs.org/en/download/
//
// Duplicate this file and remove ".template" from the filename to get started.
// See full documentation here: https://github.com/raycast/script-commands
//
// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title toNumber
// @raycast.mode fullOutput
// @raycast.packageName utils
//
// Optional parameters:
// @raycast.icon 🤖
// @raycast.argument1 { "type": "text", "placeholder": "search"}
//
// Documentation:
// @raycast.description number to hex
// @raycast.author zhouJF
// @raycast.authorURL https://github.com/jfzhou5

const { pbcopy } = require("../utils");
const main = () => {
  const arg1 = process.argv[2];
  const number = parseInt(arg1, 16);
  console.log(`${arg1} -> ${number}`);

  if (number.toString() !== "NaN") {
    pbcopy(number.toString());
  }
};

main();
