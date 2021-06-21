## Running the app

1. unzip to a folder
2. navigate to the folder
3. run "npm i"
4. run "ng serve --port 3000" (or your favorite port)
5. in browser navigate "http://localhost:3000"

## Remarks:

1. The app has a header with two links each task.
2. It also has routing. when a route is not found, it navigates to main page (the first page)
3. I did not use any css framework, it is based mainly on flexbox and css grid. it has some responsive design too.
4. For implementation of the currency I used code to add "$" sign and observed the fractions so that it can at most have 2 decimal digits.
5. There are common styles in styles.scss file. "Google Open Sans" fonts are embedded in the assets.
6. For the chart, I used ng2-charts that is based on Chart.js. (actually this is the first time i used it)
