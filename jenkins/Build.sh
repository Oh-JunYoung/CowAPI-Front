#!/bin/bash

BUILD_PATH=/home/ec2-user/jenkins/CowAPI-Front/frontend

echo ">>> Project Build"
cd $BUILD_PATH

pwd
npm install
npm run build