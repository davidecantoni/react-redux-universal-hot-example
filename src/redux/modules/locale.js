const CHANGE_LOCALE = 'newprojects/locale/CHANGE_LOCALE';

export const initialState = {
  locales: ['en', 'fr', 'ar'],
  current: 'en'
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        current: action.loc
      };
    default:
      return state;
  }
}

export function changeLocale(loc) {
  return { type: CHANGE_LOCALE, loc };
}
