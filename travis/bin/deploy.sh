#!/usr/bin/env bash

if [[ $TRAVIS_BRANCH = "master" ]]
then
  while sleep 60s; do echo "Waiting. Time elapsed: $SECONDS seconds"; done &
  yarn run deploy:prod
  kill %1
else
  while sleep 60s; do echo "Waiting. Time elapsed: $SECONDS seconds"; done &
  yarn run deploy:dev
  aws s3 rm s3://$AWS_S3_BUCKET --recursive && aws s3 cp ./public s3://$AWS_S3_BUCKET --recursive && aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION_ID --paths '/*'
  kill %1
fi
