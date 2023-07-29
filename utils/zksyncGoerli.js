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
// @raycast.title zksync goerli explorer search
// @raycast.mode silent
// @raycast.packageName zksync
//
// Optional parameters:
// @raycast.icon 🤖
// @raycast.argument1 { "type": "text", "placeholder": "search", "optional": true}
//
// Documentation:
// @raycast.description Write a nice and descriptive summary about your script command here
// @raycast.author zhouJF
// @raycast.authorURL https://github.com/jfzhou5

const { exec } = require("child_process");
const zksyncUrl = "https://goerli.explorer.zksync.io";
const main = () => {
  const arg1 = process.argv[2];

  if (arg1.length === 0) {
    url = zksyncUrl;
  } else if (arg1.length < 42) {
    url = `${zksyncUrl}/block/${arg1}`;
  } else if (arg1.length === 42) {
    url = `${zksyncUrl}/address/${arg1}`;
  } else if (arg1.length === 66) {
    url = `${zksyncUrl}/tx/${arg1}`;
  }

  exec(`open "${url}"`);
};

main();
