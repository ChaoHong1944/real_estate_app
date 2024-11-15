# NYC Housing Violations App

A web application that allows users to search for addresses in New York City and view any associated housing violations. This project combines the power of the Google Maps API with a custom-built API that processes housing violation data sourced from the NYC Open Data platform.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

Address Search: Type in any address in NYC and view detailed information about the property.

Housing Violations: Display violations reported for the searched address using data from the [DOB Complaints Received dataset.](https://data.cityofnewyork.us/Housing-Development/DOB-Complaints-Received/eabe-havv/about_data)

Interactive Map: Integrated Google Maps to visualize searched locations with markers and associated property details.

## Technologies Used

### Frontend:

* React.js
* Google Maps API
* Axios  (for API requests)
* Tailwind CSS (for styling)

### Backend:

* Node.js
* Express.js
* Custom API for processing NYC Housing Violations dataset

## How it Works

1. Users input an addres into the search bar.
2. The google Maps API identifies and locate the address, placing a marker on the map.
3. The application queries the custom API with the address details.
4. The custom API fetches violation records from the [NYC Open Data platform](https://data.cityofnewyork.us/Housing-Development/DOB-Complaints-Received/eabe-havv/about_data) and returns them to the front end
5. Violations are displayed to the user in a user-friendly format.

## Dataset Details

The dataset used is the DOB Complaints Received, which contains detailed information about housing violations in NYC. Our custom API processes and filters this data to show only the violations relevant to the searched address.

## Key Directories

* Frontend: React application, including Google Maps integration
* Backend: 

# Contributors:

1. 
2. 
3. 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
