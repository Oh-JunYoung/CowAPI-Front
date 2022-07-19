#!/bin/bash

BUILD_PATH=/home/ec2-user/jenkins/CowAPI-Front/frontend

echo ">>> Project Build"
cd $BUILD_PATH

## 1. nvm(노드 버전 관리자)을 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

## 2. nvm을 활성화
. ~/.nvm/nvm.sh

## 3. Node.js의 최신 버전을 설치
nvm install --lts

## 4.  Node.js가 올바르게 설치되고 실행되는지 테스트
node -e "console.log('Running Node.js ' + process.version)"
