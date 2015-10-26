const CHANGE_DEVELOPER = 'newprojects/filters/CHANGE_DEVELOPER';
const CHANGE_PROJECT = 'newprojects/filters/CHANGE_PROJECT';

const initialState = {
  developer: '',
  project: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DEVELOPER:
      return {
        ...state,
        developer: action.developer
      };
    case CHANGE_PROJECT:
      return {
        ...state,
        project: action.project
      };
    default:
      return state;
  }
}

export function changeDeveloper(developer) {
  return { type: CHANGE_DEVELOPER, developer };
}

export function changeProject(project) {
  return { type: CHANGE_PROJECT, project };
}
