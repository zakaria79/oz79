#!/bin/bash
git pull origin master
alias node="/home/zakaria/.nvm/versions/node/v12.9.0/bin/node"
/home/zakaria/.nvm/versions/node/v12.9.0/bin/npm install
cd ./front-dev
/home/zakaria/.nvm/versions/node/v12.9.0/bin/npm install
/home/zakaria/.nvm/versions/node/v12.9.0/bin/npm run build
cp -r build/* ../public/
cp build/index.html ./../views/index.ejs
echo "mymaa-othmane" | sudo -S systemctl restart mynodeapp
