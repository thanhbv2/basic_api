#!/bin/bash
docker stop shippo_auth
docker rm shippo_auth
docker build -t shippo_auth .
docker run -d --name shippo_auth -p 8011:8011 shippo_auth
# sleep 2
# curl http://localhost:3000