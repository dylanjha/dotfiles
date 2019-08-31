#!/bin/bash
echo "Checkout master"
git checkout master
echo "Deleting local copies of merged branches"
git branch --merged | egrep -v "(^\*|master)" | xargs git branch -d
