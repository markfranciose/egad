'use strict'
const { execSync } = require("child_process");

// need to be in a git repo to pull origin && do anything
function checkGit() {
  try {
    var ok = execSync('git status');
  }
  catch(e) {
    console.log(e.status);
    exit 1
  }
}

// get the remote 'origin' by default, to plug into the repository queryies
// for gql
function getRemote() {
  const ok = execSync('git remote -vv').toString();
  console.log(ok);
}
getRemote();
