#!/bin/bash
git clone git@github.com:zakaria79/oz79.git portfolio
cd portfolio
/home/zakaria/.nvm/versions/node/v12.9.0/bin/npm install
cd ./front-dev
/home/zakaria/.nvm/versions/node/v12.9.0/bin/npm install
/home/zakaria/.nvm/versions/node/v12.9.0/bin/npm run build
cp -r build/* ../public/
cp build/index.html ./../views/index.ejs
echo "mymaa-othmane" | sudo -S systemctl restart mynodeapp
