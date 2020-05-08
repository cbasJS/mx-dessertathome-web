#!/usr/bin/env bash

if [[ $TRAVIS_BRANCH = "master" ]]
then
  while sleep 60s; do echo "Waiting. Time elapsed: $SECONDS seconds"; done &
  yarn run deploy:prod
  kill %1
else
  while sleep 60s; do echo "Waiting. Time elapsed: $SECONDS seconds"; done &
  yarn run deploy:dev
  kill %1
fi
