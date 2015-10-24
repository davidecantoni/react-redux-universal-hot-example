const LOAD = 'newprojects/projects/LOAD';
const LOAD_SUCCESS = 'newprojects/projects/LOAD_SUCCESS';
const LOAD_FAIL = 'newprojects/projects/LOAD_FAIL';

const initialState = {
  loaded: false
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
  return globalState.projects && globalState.projects.loaded;
}

export function load(filters) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`/mobileapi/search-map?agg=${filters.zoom}&currency=aed&distance=1&lat=${filters.lat}&limit=50&long=${filters.lng}`)
  };
}
