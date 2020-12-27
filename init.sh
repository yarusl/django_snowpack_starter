#!/bin/bash

chmod 755 bundle.sh production.sh merge.sh server/manage.py

# webpack for production
npm install

# snowpack for development 
npm --prefix frontend/ install

# django and django rest framework 
pip3 install -r server/requirements.txt

python3 server/manage.py makemigrations
python3 server/manage.py migrate


