#!/bin/bash
git pull origin master
alias node="/home/zakaria/.nvm/versions/node/v12.9.0/bin/node"
/home/zakaria/.nvm/versions/node/v12.9.0/bin/npm install
echo $1 | sudo -S systemctl restart mynodeapp
