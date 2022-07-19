#!/bin/bash

BUILD_PATH=/home/ec2-user/jenkins/CowAPI-Front/frontend

echo ">>> Project Build"
cd $BUILD_PATH

npm run build