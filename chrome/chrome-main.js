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
// @raycast.title main
// @raycast.mode silent
// @raycast.packageName Chrome
//
// Optional parameters:
// @raycast.icon ../logs/chrome.png
// @raycast.argument1 { "type": "text", "placeholder": "link", "optional": true}
//
// Documentation:
// @raycast.description Write a nice and descriptive summary about your script command here
// @raycast.author zhouJF
// @raycast.authorURL https://github.com/jfzhou5

// user chrome://version/ to konw profile nn

const { exec } = require("child_process");
const { getUrl } = require("../utils");
const main = () => {
  const arg1 = process.argv[2];
  const url = getUrl(arg1);

  const script = `open -n -a 'Google Chrome' --args --profile-directory="Default" "${url}"`;
  exec(script);
};

main();
