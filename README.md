# Uneaux Front End Codebase

# 01. Usage
`` yarn install ``

``   yarn start ``

# 02. Architecture
_Please review architecture so you have a strong understanding of what is organized where. This structure was made to keep the application as reusable as necessary._

### index.jsx
Highest level. Instantiates the app and the Redux store.


### App/
This is where the main App component is created. All higher-level.


### _ actions/
All Redux action creators go here. Organized by action type:

- ##### Alert Actions: alert.actions.js
 Alert (toaster notifications).

- ##### User Action Creator: user.actions.js
"Redux action creators for actions related to users. Public action creators are exposed via the userActions object at the top of the file and function implementations are located below.
    - Most of the actions for users are async actions that are made up of multiple sub actions, as they have to make an http request and wait for the response before completing. Async actions typically dispatch a request action before performing an async task (e.g. an http request), and then dispatch a success or error action based on the result of the async task."


### _ components/
Shared React components that can be used anywhere in the application.

- ##### PrivateRoute.jsx
Renders <Route/> if and only if user is logged in, otherwise goes to login.



### _ constants/
All Redux action type constants used by action creators and reducers. This simplifies actions significantly.

Also houses all other constants that will be globally needed. _*Styling will be here as well.*_

- ##### user.constants.js
"The user constants object contains the redux user action types that can be dispatched in the react application, async actions that perform http requests involve a request followed by a success or error response, so each of these three steps is represented by a redux action."


### _ helpers/
Odds and ends. To sort later, but usually don't have a good dedicated place.
- auth-header.js will probably go to services.
- fake-backend.js will stay here until production.
- history.js will stay here.
- store.js will stay here.


### _ reducers/
All reducers for the project. Reducers update a different part of application state in response to a Redux action.

- ##### Alert Reducer
"The redux alert reducer manages the application state for alerts / toaster notifications, it updates state when an alert action is dispatched from anywhere in the application, for example when an `alertConstants.SUCCESS` action is dispatched, the reducer updates the alert state to an object with `type: 'alert-success' and message: action.message`."

- ##### Authentication Reducer
"The redux authentication reducer manages the state related to login (and logout) actions, on successful login the current user object and a loggedIn flag are stored in the `authentication` section of the application state. On logout or login failure the authentication state is set to an empty object, and during login (between login request and success/failure) the authentication state has a loggingIn flag set to true and a user object with the details of the user that is attempting to login."


- ##### Registration Reducer
"The redux registration reducer manages the `registration` section of the application state, as you can see there isn't much to it, on registration request it just sets a `registering` flag set to true which the RegisterPage uses to show the loading spinner. On register success or failure it clears the registration state."

- ##### Users Reducer
"The redux users reducer manages the `users` section of the application state which is used by the HomePage to display a list of users and enable deleting of users."

  - *This will be changed very soon - MJ 6/5/18*


### _ services/
"The _ services layer handles all http communication with backend apis for the application, each service encapsulates the api calls for a content type (e.g. users) and exposes methods for performing various operations (e.g. CRUD operations). Services can also have methods that don't wrap http calls, for example the `userService.logout()` method just removes an item from local storage."

### containers/
DO NOT EDIT. Irrelevant. Will be removed from master by production.


# 03. Tutorial
## Creating a new /page

Suppose we're creating a page, TestPage when navigating to `localhost:8080/test` for example.
  1. Duplicate the folder `/TestPage/` in root.
      - Within `/TestPage/`, notice folder `assets/`. Store all React components/files that are unique specifically to this component and nowhere else. An example asset, `TestChild`, is made for you.<br/><br/><br/>

  2. In `/App/App.jsx`:
      - under `//Pages`, write:
          - `import { TestPage } from '../TestPage';` to add that page to our main App.
      - with all the rest of the routes, add:
          - `<Route path="/test" component={TestPage} />`<br/><br/><br/>
  3. Go to `localhost:8080/test`.
      - I showed all three permutations by which you can have variables passed between all of these React components:
          - parent within parent: Button1
          - child to parent: Button2
          - parent to child: bottommost text.




## Sources:
All quotes from the tutorial:
http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
