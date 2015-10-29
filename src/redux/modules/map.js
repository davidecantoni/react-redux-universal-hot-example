const UPDATE_MAP = 'newprojects/filters/UPDATE_MAP';

const initialState = {
  lat: 25.191971447062446,
  lng: 55.27445929124927,
  zoom: 17,
  agg: 7,
  distance: 1
};

export default function reducer(state = initialState, action = {}) {
  //console.log(state, action.type);
  switch (action.type) {
    case UPDATE_MAP:
      return {
        ...state,
        lat: action.data.lat,
        lng: action.data.lng,
        zoom: action.data.zoom,
        agg: action.data.agg,
        distance: action.data.distance
      };
    default:
      return state;
  }
}

export function updateMap(data) {
  return { type: UPDATE_MAP, data };
}
