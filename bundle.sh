#!/bin/bash

npm run --prefix frontend/ build 
npm run build 

echo ''
mkdir build/dist/
echo ''

echo 'coping static to build'
cp -r frontend/build/static build/

echo ''
echo 'coping html to build'
cp frontend/build/*.html build/

echo ''
echo 'coping img to build/dist'
cp -r frontend/build/dist/img build/dist/

echo ''
echo 'moving js to build/dist'
mv build/*.js build/dist/

echo ''
echo 'cleaning up'
find build/dist/img -name "*.js" -type f -delete
rm build/*.LICENSE.txt
echo 'bundling: Done...'