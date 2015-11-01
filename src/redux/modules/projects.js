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

export function load(globalState) {
  // developer url is given
  /*if (globalState().router.params && globalState().router.params.developerUrl) {
    console.log(globalState().router.params);
  }*/

  const filters = globalState.map;
  //console.log(`/mobileapi/search-map?agg=${filters.agg}&currency=aed&distance=${filters.distance}&lat=${filters.lat}&limit=100&long=${filters.lng}`);
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`/mobileapi/search-map?category=2&agg=${filters.agg}&currency=aed&distance=${filters.distance}&lat=${filters.lat}&limit=100&long=${filters.lng}`)
  };
}
