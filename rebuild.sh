#!/bin/bash

docker stop mycms
docker rm mycms
docker rmi mycms:1.0.0
docker build --no-cache -t mycms:1.0.0 .
docker run -p 3232:3232 -d --name mycms mycms:1.0.0
#docker run -p 3232:3232 --env HTTP_PROXY="http://prelly.telkomsel.co.id:8080" -d --name dummy_response dummy_response:1.0.0
