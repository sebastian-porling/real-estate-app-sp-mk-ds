#!/usr/bin bash

cd frontend
echo "Building vue frontend..."
npm i
npm run build
echo "Done building frontend!\n"

cd ../backend
echo "Building express backend..."
npm i
npm run build
echo "Done building backend!\n"
echo "The binaries can be found in the build folder :D"