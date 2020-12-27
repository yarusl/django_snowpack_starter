#!/bin/bash

# integrate frontend to django 
echo ''
cp -r build/dist server/frontend/static/
cp -r build/static server/frontend/static/
cp -r build/*.html server/frontend/templates/frontend/
echo 'merging: Done...'