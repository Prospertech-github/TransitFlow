# Getting Started with the TransitFlow Web App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, the following folders exists;

### node_modules

This holds all packages and dependencies needed for the development and production
of the web app. 
This folder won't be available for developers who fork/clone this repo. To access it, run `npm install` in the project directory on your terminal

### public

This holds the files the index.html file which is the root document of the web app. It is also home to all public files like the favicon.ico too

### src

This folder holds other folders and documentts that were created during the development stage of the TransitFlow web app. It also houses the entry points of our web app like the index.js file, the App.js file and the root stylesheet, index.css.
The folders in the `src` folder are 
#### components
This folder is where all reusable components of the web app are stored. They are either stored in folders or as single documents depending on the complexity of the component.
Example; The `Navbar.jsx` component file is stored in a `Navbar` folder together with its `Navbar.module.css` file, while the `Container.jsx` component is just stored as a single document without a folder.
#### images
This folder holds all images and icons that are available on the TransitFlow web app. Icons are stored in the `icons` folder while images are stored directly inside the `image` folder.
#### pages
This folder is home to all the different pages of the TransitFlow web app. It was created as a scalability-plan, in case the current web app is scaled to have other functional pages.


## CODE BASE
The TransitFlow web app was built using React and CSS modules for styling. The choice of the technology being used is because of the relative easy learning-curve and familiarity as compared to other frameworks or libraries.
### Deploy
The web app was deployed to `Netlify` and its live link hosted on `https://transitflow-app.netlify.app`

**Note: Developers must always and can only contribute to the code base using the same technology**

## DIFFICULTY
Though the task of developing the TransitFlow web app was fun, the challenges encounterd during the course of this project are nerve-breaking. Some of the challenges encountered include
`Time`

`Inconsitent design by the UI designers (every section is unique and then reduces the concept of reusability)`

`Creating the buttons`

