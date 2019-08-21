#!/bin/bash
/home/zakaria/Bureau/projects/oz79/oz/bin/build.sh
/home/zakaria/Bureau/projects/oz79/oz/bin/rsync.sh
ssh zakaria@oz79 "cd www;/home/zakaria/.nvm/versions/node/v12.9.0/bin/npm install"
