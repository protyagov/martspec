#!/bin/sh

##############################################################################

if [ $# -eq 0 ]; then
    echo "No arguments provided. Please enter alpha, beta, prod or dev"
    exit 1
fi


CONTEXT_NAME="subledger-aci-$1" 
OVERIDE_FILE="override.$1.yaml"

echo $CONTEXT_NAME
echo $OVERIDE_FILE

docker context use default
az acr login --name sedera1
docker tag subledger-ui sedera1.azurecr.io/subledger-ui:v1
docker push sedera1.azurecr.io/subledger-ui:v1

docker context use $CONTEXT_NAME
COMPOSE_PROJECT_NAME=subledger_ui docker compose -f docker-compose.yaml -f $OVERIDE_FILE up

docker ps
