#!/usr/bin bash

# Install everything needed for the scripts
cd backend
npm i

# Download and write profile images
cd images/profile
node profileScraper.js

# Download and write house images
cd ../houses
node houseScraper.js

# Map ID to houses and set the profile and house images
cd ../../
node mapDataScript.js