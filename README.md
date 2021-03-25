# CRO example

This is an example CRO test that modifies the user experience on mobile for the following page on Amazon: 

https://www.amazon.co.uk/Echo-Dot-3rd-Gen-Charcoal/dp/B07PJV3JPR/ref=sr_1_2?th=1

The page is modified to include a pop up 'Add to basket' button and quantity select, fixed to the bottom of the view port as long as the main 'Add to basket' button is outside of the view port, thus making the call to action ever present for the user.

## Running the example

1. Install this Google Chrome extension: https://chrome.google.com/webstore/detail/code-injector/jgcallaoodbhagkaoobenaabockcejmc

2. Click on the extension. Click 'Add Rule' and add the URL pattern https://www.amazon.co.uk/Echo-Dot-3rd-Gen-Charcoal/dp/B07PJV3JPR/ref=sr_1_2

3. Still in the extension, click in 'Files' and add the following URLs:
- http://localhost:7000/js/challenge-1.js
- http://localhost:7000/css/challenge-1.css

4. Run `npm install` in the terminal to install the dependencies.

5. Run `npm start` in the terminal to start the local server and go to https://www.amazon.co.uk/Echo-Dot-3rd-Gen-Charcoal/dp/B07PJV3JPR/ref=sr_1_2

6. Select a mobile view in the developer tools to view the example.
