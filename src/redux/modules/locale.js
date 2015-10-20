const CHANGE_LOCALE = 'CHANGE_LOCALE';

export const locale = {
  locales: ['en', 'fr', 'ar'],
  current: 'en'
};

export default function localeInfo(state = locale, action = {}) {
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
