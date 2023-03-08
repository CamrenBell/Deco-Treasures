#!/bin/bash

##############################
# This builds and pushes both the nginx/React image
# and the DRF one.  
#
# The nginx/React image gets built with an environment variable
# that sets the url of the DRF backend REACT_APP_BASE_URL.  Once you
# know the IP address of your EC2 instance, you would pass that in
# instead of localhost
##############################

BASE_URL=$1
NEW_VERSION=$2

docker buildx build --platform linux/amd64 --build-arg REACT_APP_BASE_URL=$BASE_URL -t camrebel/webserver-prod:$NEW_VERSION -f webserver/Dockerfile . --no-cache
docker push camrebel/webserver-prod:$NEW_VERSION

docker buildx build --platform linux/amd64  -t camrebel/backend-prod:$NEW_VERSION -f backend/Dockerfile ./backend --no-cache
docker push camrebel/backend-prod:$NEW_VERSION