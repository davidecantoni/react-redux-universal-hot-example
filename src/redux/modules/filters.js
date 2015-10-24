const CHANGE_LAT = 'newprojects/filters/CHANGE_LAT';
const CHANGE_LNG = 'newprojects/filters/CHANGE_LNG';
const CHANGE_ZOOM = 'newprojects/filters/CHANGE_ZOOM';

const initialState = {
  lat: 25.191971447062446,
  lng: 55.27445929124927,
  zoom: 17
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
    case CHANGE_ZOOM:
      return {
        ...state,
        zoom: action.zoom
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

export function changeZoom(zoom) {
  return { type: CHANGE_ZOOM, zoom };
}
