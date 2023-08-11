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
// @raycast.title toether
// @raycast.mode fullOutput
// @raycast.packageName utils
//
// Optional parameters:
// @raycast.icon 🤖
// @raycast.argument1 { "type": "text", "placeholder": "number"}
// @raycast.argument2 { "type": "text", "placeholder": "decimals", "optional": true}
//
// Documentation:
// @raycast.description number to hex
// @raycast.author zhouJF
// @raycast.authorURL https://github.com/jfzhou5

// const { exec } = require("child_process");
const { ethers } = require("ethers");
const { pbcopy } = require("../utils");
const main = () => {
  const arg1 = process.argv[2];
  const arg2 = process.argv[3] || 18;
  const rst = ethers.formatEther(arg1, Number(arg2));
  console.log(`${arg1} -> ${rst}`);

  if (rst.toString() !== "0xNaN") {
    pbcopy(`${rst}`);
  }
  // exec(`echo ${hexNumber} | pbcopy`);
};

main();
