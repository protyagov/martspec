#!/bin/sh
docker context use default
docker image prune -f
docker build -t subledger-ui -f docker/Dockerfile .
