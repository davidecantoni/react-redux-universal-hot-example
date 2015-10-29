import { expect } from 'chai';

import reducer from '../modules/map';

describe('map reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal({
        lat: 25.191971447062446,
        lng: 55.27445929124927,
        zoom: 17,
        agg: 7,
        distance: 1
      });
  });
});
