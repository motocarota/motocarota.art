#!/bin/bash
# deploy

# build the source
npm run build

# deploy the static files
git add docs
git commit -m "update docs"
git push
