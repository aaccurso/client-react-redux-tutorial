import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';
import actionTypes from '../src/actionTypes';

describe('reducer', () => {

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: actionTypes.SET_STATE,
      state: {
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: { Trainspotting: 1 }
        }
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: { Trainspotting: 1 }
      }
    }));
  });

});
