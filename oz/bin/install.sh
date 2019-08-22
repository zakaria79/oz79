#!/bin/bash
git clone git@github.com:zakaria79/oz79.git portfolio
cd portfolio
/home/zakaria/.nvm/versions/node/v12.9.0/bin/npm install
echo $1 | sudo -S systemctl restart mynodeapp
