#!/bin/sh

#install homebrew 
if [ `command -v brew` == "" ] ; then
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew install node
fi
#install angular cli localy
npm install -g @angular/cli
#install nobe module
npm install

#deploy the dashboard
ng serve --open 
