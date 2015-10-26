const LOAD = 'newprojects/project/LOAD';
const LOAD_SUCCESS = 'newprojects/project/LOAD_SUCCESS';
const LOAD_FAIL = 'newprojects/project/LOAD_FAIL';

const initialState = {
  loaded: false,
  editing: {},
  saveError: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.project && globalState.project.loaded;
}

export function load(id = '0') {
  console.log('fetching project with url:', id);
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`/mobileapi/search?id=${id}`)
    //promise: (client) => client.get('/api/project/load/' + id) // params not used, just shown as demonstration
  };
}
