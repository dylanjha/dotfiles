#!/bin/bash

function LOG() {
  echo "$(tput setaf 5)$1$(tput setaf 7)"
}

LOG "Starting git_update_master.sh"
LOG "Checkout master"
git checkout master
LOG "Pull latest"
git pull origin master
LOG "Checkout previous branch"
git checkout -
LOG "Merging master"
git merge master
LOG "Done with git_update_master.sh"

