const child_process = require("child_process");

function pbcopy(data) {
  return new Promise(function (resolve, reject) {
    const child = child_process.spawn("pbcopy");

    child.on("error", function (err) {
      reject(err);
    });

    child.on("close", function (err) {
      resolve(data);
    });

    child.stdin.write(data);
    child.stdin.end();
  });
}

const getUrl = (arg) => {
  const defaultUrl = "https://www.google.com/";

  let url;
  if (arg === "") {
    url = defaultUrl;
  } else if ("dev".includes(arg)) {
    url = "https://app-dev.para.space";
  } else if ("staging".includes(arg)) {
    url = "https://app-staging.para.space";
  } else if ("paraspace".includes(arg)) {
    url = "https://app.para.space";
  } else if ("bilibili".includes(arg)) {
    url = `https://www.bilibili.com`;
  } else {
    url = defaultUrl;
  }
  return url;
};

module.exports = {
  pbcopy,
  getUrl,
};
