#!/usr/bin/env bash

if [[ $TRAVIS_BRANCH = "master" ]]
then
  while sleep 60s; do echo "Waiting. Time elapsed: $SECONDS seconds"; done &
  yarn run deploy:prod
  kill %1
else
  while sleep 60s; do echo "Waiting. Time elapsed: $SECONDS seconds"; done &
  STAGE=dev AWS_S3_BUCKET=$AWS_S3_BUCKET AWS_CLOUDFRONT_DISTRIBUTION_ID=$AWS_CLOUDFRONT_DISTRIBUTION_ID yarn deploy
  kill %1
fi
