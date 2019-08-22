#!/bin/bash
cd ./front-dev
npm run build
cp -r build/* ../public/
cp build/index.html ./../views/index.ejs
