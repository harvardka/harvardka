 // The reason a custom history object is used instead of the one built into
 // React Router is to enable redirecting users from outside React components,
 // for example from the user actions after successful login or registration.
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
