#!/bin/bash
API_SERVER="${API_SERVER:-http://localhost:3006/swagger-yaml}"  # If variable not set or null, use default.
OUTPUT_FOLDER="./packages/client/api"

rm -rf $OUTPUT_FOLDER
# Install from homebrew https://formulae.brew.sh/formula/openapi-generator
openapi-generator generate -i $API_SERVER \
-g typescript-axios \
-o $OUTPUT_FOLDER \
--skip-validate-spec

# Run lint after to make it easy to see changes after script
npm run lint