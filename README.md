<p align="center"><a href="https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f"><img src="https://i.imgur.com/PATsTx2.png" title="View tutorial" alt="React, React Router, Redux and Redux Thunk" width="900"></a></p>

[![Dependency Status](https://dependencyci.com/github/notrab/create-react-app-redux/badge)](https://dependencyci.com/github/notrab/create-react-app-redux)

* Tutorial: [Getting started with create-react-app, Redux, React Router & Redux Thunk](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f)
* Example: [View on Heroku](https://cra-redux-router-thunk.herokuapp.com/) 🙌

## Installation

```bash
git clone https://github.com/notrab/create-react-app-redux.git
cd create-react-app-redux
yarn
```

## Get started

```bash
yarn start
```

This boilerplate is built using [create-react-app](https://github.com/facebookincubator/create-react-app) so you will want to read the User Guide for more goodies.


If you're reading this, congratulations on being chosen to work on Uneax's frontend. This document attempts to explain the design decisions that
went into the Frontend Stack and provide an onboarding mechanism for undergraduates with no previous frontend experience.

There's not much point in proceeding if you don't:

- Have a rudimentary understanding of Uneaux and what you'll be building.
- Have a rudimentary understanding of [Javascript]() and web development more generally.

# The Vision
Uneaux's frontend utilizes state-of-the-art Javascript libraries. The stack has a LOT of small pieces that all come together to form something that, once you get past the learning curve, you will find extremely intuitive and powerful. Before continuing you might want to check out the original documentation and tutorials for these libraries to gain a basic understanding of what they are, what problem they solve, and how they work.

 - [React](https://facebook.github.io/react/) (rendering engine)
 - [Redux](http://redux.js.org/) (state management)
 - [Immutable](https://facebook.github.io/immutable-js/) (state management)
 - [Reselect](https://github.com/reactjs/reselect) (state management)
 - [Jest](https://facebook.github.io/jest/) (testing)
 - [Create React App]() (CLI)
 - [Yarn]() (Package manager)
 - [however we're getting data from the backend]() (data)

**React** components encapsulate all interaction with the DOM. They explain how to display data, and what happens when the user interactions with them.

**Create React App** is much more than a boilerplate, it is a CLI framework for developing a react application that abstracts away some of the headache of developing a complex Javascript stack.

The **Redux** store provides a single source of truth; the data that components will display. **Action creators** handle all asynchronous actions (e.g. queries the database) and **reducers** execute mutations on the data in the store.

Instead of a javascript dictionary, the contents of the store are stored as an **Immutable** Map. This is for performance reasons (minimizing re-renders), and also eliminates a huge source of headaches in debugging.

**Reselect** allows components to be agnostic to the schema of the store. Instead we define small _selectors_ that extract particular bits of information from it. These selectors are _composable_, meaning that we can trivially combine them to reuse code and execute higher level computations on store data. They also perform memoization, enabling us to avoid re-renders when data has not changed.

Finally, **Jest** allows us to isolate and test each piece of the apparatus.

Together, they work to achieve a vision of _modularity_; to structure frontend code in a way that is _extremely reusable_, and _intelligible to anyone_ reading it.

Though frontend development can often involve churning out mountains of boilerplate code, we progress toward never having to write anything and simply composing new features of things we've already built.

As a tutorial, we are going to add a filter element to Uneaux's basic search functionality.

# Getting Set Up
- Install any necessary dependencies. If you don't have node and npm installed, you can download them [here]().
- Install the CLI dependencies `npm install -g yarn create-react-app jest jest-cli`
- Clone the repository. Go to [uneaux-frontend]() and clone it to your local development folder.
- Install the necessary dependencies using `yarn` (Facebook's alias for npm that is faster and better at version control)
- Run the site using `yarn start`. It should open your browser to `localhost:3000/`
- There are number of sublime plugins and snippets for react, redux, and jest, and jasmine that may save you some typing. I particularly like the jasmine snippets package which tab completes boilerplate code for tests.

# File Structure
We are using the file structure put in place by create-react-app. All of the important javascript is stored in the `src` directory. There are three sub-directories inside of `src`.

### Components
Components contains the definitions of the all of the React components used throughout the site. By convention, a file containing a component is named the same as the component it contains. Components can be organized into subdirectories by feature. Each components should have a matching `<name>.test.js` file.

### Containers
Containers define top level components that are rendered by the router. They should not contain very much logic or data at all, other than to interact with the url to determine which components to render.

### Modules
Modules define all of the business logic for a given feature. There should be one file here for every top-level key of the Redux store, and there should be one top-level key for every top-level Uneaux feature.

Each file in the modules subdirectory implmenets the reducer, action creators, and selectors for a given feature. For example, `vis.js` implements the reducer, action creators, and selectors for the central visualization. Eventually we may need to split this code into different features. Each features should also have a `<name>.test.js` that contains the jest tests for the contents of the file.

The file `modules/index.js` combines all of the reducers defined in the folder into one, which then becomes the actual reducer.

# Getting Started

- Create a branch. If you're working on a long term project (more than one day), you'll want to create multiple branches, a "main" branch to serve as an upstream specific to your feature, and one for each chunk of work. This way you can submit small pull requests each day to the main branch to get feedback along the way, and when you're ready simply merge the main branch into master. For this project I created the upstream `filters` and `filters-comanies`.

# How to Build a Feature + Walkthrough

Coming soon