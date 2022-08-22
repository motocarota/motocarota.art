#!/bin/bash
# deploy

# build the source
npm run build

# deploy the static files
git add .
git commit -m "update"
git push
