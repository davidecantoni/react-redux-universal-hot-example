export const LOAD = 'newprojects/project/LOAD';
export const LOAD_SUCCESS = 'newprojects/project/LOAD_SUCCESS';
export const LOAD_FAIL = 'newprojects/project/LOAD_FAIL';

// object with all loaded project
export const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          loading: true
        }
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          loading: false,
          loaded: true,
          data: action.result,
          error: null
        }
      };
    case LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          loading: false,
          loaded: false,
          data: null,
          error: action.error
        }
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  const id = globalState.router.params.projectUrl;
  return globalState.project[id] && globalState.project[id].loaded;
}

export function load(globalState) {
  const params = globalState.router.params;
  const id = params.projectUrl;
  const lang = params.lang;
  console.log('fetching project with url:', id);
  console.log('fetching project with lang:', lang);
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    id,
    //promise: (client) => client.get(`/mobileapi/search?id=${id}`)
    // TODO add language param
    //promise: (client) => client.get('/' + lang + '/en/api/project/load/' + id)
    promise: (client) => client.get('/api/project/load/' + id) // params not used, just shown as demonstration
  };
}
