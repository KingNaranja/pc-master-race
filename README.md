# PC MASTER RACE - [Live Demo](https://modest-cray-5c4ae9.netlify.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e63d49ce-78e7-46b1-91ea-bff43a7de95c/deploy-status)](https://app.netlify.com/sites/modest-cray-5c4ae9/deploys)

[PCMR API](https://github.com/KingNaranja/pcmr-api)

## Computer Enthusiast's Hub 
PCMR is a web app built with React that keeps you up to date on everything PCMR. 

## Motivation
 [*PCMR*](https://www.reddit.com/r/pcmasterrace/) is a an awesome community where PC enthusiasts like me can discuss and share content about anything related to Personal Computers. This web app will also serve as a resource for anyone who wishes to join the community.

## Development 
Understanding how data flows through components has been the most interesting part of learning React, but if I learned anything from [*FaceBird*](https://github.com/KingNaranja/FaceBird-2), it's that things can get *messy*.

### Context
The Context API provides a way to pass data through the component tree without having to manually pass them down at each level.
While this can't replace how useful *Redux* and Redux middleware is, you *don’t need to install any external libraries for state management*. 

PCMR makes use of the `useState`, `useEffect` and `useReducer` React Hooks to share stateful logic between components.

### Redux Philosophy 
According to the documentation Redux can be described in three fundamental [principles](https://i.imgur.com/YkBneOF.jpg),  ***stores, actions, and reducers.***

1. Actions are the only things that should trigger a state change.
2. A reducer specifies what a part of the store will be affected by the action. 
3. The store holds all the application data in an object tree.


## Technology
* React ( JSX )
* React Router
* Styled Components 
* Font Awesome

This app was created with `create-react-app`

## Local Setup
Install dependencies with `npm install`

Run the development server with `npm start`
