const CHANGE_LAT = 'CHANGE_LAT';
const CHANGE_LNG = 'CHANGE_LNG';

const initialState = {
  lat: 25.191971447062446,
  lng: 55.27445929124927
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_LAT:
      return {
        ...state,
        lat: action.lat
      };
    case CHANGE_LNG:
      return {
        ...state,
        lng: action.lng
      };
    default:
      return state;
  }
}

export function changeLat(lat) {
  return { type: CHANGE_LAT, lat };
}

export function changeLng(lng) {
  return { type: CHANGE_LNG, lng };
}
