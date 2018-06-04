export const TOGGLE_JOIN = 'organization_flow/TOGGLE_JOIN';
export const TOGGLE_CREATE = 'organization_flow/TOGGLE_CREATE';

const initialState = {
  create: true,
  str: 'Maddy Theresa'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_JOIN:
      console.log('j');
      return {
        ...state,
        create: false
      };
    case TOGGLE_CREATE:
      console.log('c');
      return {
        ...state,
        create: true
      };
    default:
      return state;
  }
};

export const toggleJoin = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_JOIN
    });
  };
};

export const toggleCreate = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_CREATE
    });
  };
};
