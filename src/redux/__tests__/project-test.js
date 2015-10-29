import { expect } from 'chai';

import * as types from '../modules/project';

describe('project reducer', () => {
  it('should return the initial state', () => {
    expect(
      types.default(undefined, types.initialState)
    ).to.deep.equal({});
  });

  it('should handle LOAD', () => {
    expect(
      types.default([], {
        type: types.LOAD,
        id: 5
      })
    ).to.deep.equal({
        [5]: {
          loading: true
        }
      });
  });

  it('should handle LOAD_SUCCESS', () => {
    expect(
      types.default([], {
        type: types.LOAD_SUCCESS,
        id: 5,
        result: []
      })
    ).to.deep.equal({
        [5]: {
          loading: false,
          loaded: true,
          data: [],
          error: null
        }
      });
  });

  it('should handle LOAD_FAIL', () => {
    expect(
      types.default([], {
        type: types.LOAD_FAIL,
        id: 5,
        error: 'error'
      })
    ).to.deep.equal({
        [5]: {
          loading: false,
          loaded: false,
          data: null,
          error: 'error'
        }
      });
  });
});
