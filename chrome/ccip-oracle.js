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
// @raycast.title CCIP Oracle
// @raycast.mode silent
// @raycast.packageName Oracle
//
// Optional parameters:
// @raycast.icon ../logs/avax_32.avif
//
// Documentation:
// @raycast.description Write a nice and descriptive summary about your script command here
// @raycast.author zhouJF
// @raycast.authorURL https://github.com/jfzhou5

// user chrome://version/ to konw profile nn

const { exec } = require("child_process");
require("../initEnv");

const main = () => {
  const script = `open -n -a 'Google Chrome' --args --profile-directory="Default" '${process.env.CCIP_ORACLE}'`;
  exec(script);
};

main();
