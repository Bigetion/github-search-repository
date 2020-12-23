import { createReducer } from '@reduxjs/toolkit';

import {
  searchData,
} from './actions';

const initialState = {};

const reducer = createReducer(initialState, {
  [searchData.pending]: (state) => {
    state = Object.assign(state, {
      searchDataLoading: true,
      searchDataSuccess: false,
      searchDataError: false,
      repoList: [],
      getDetailLoading: true,
    });
  },
  [searchData.fulfilled]: (state, action) => {
    state = Object.assign(state, {
      searchDataSuccess: true,
      repoList: action.payload,
      searchDataLoading: false,
    });
  },
  [searchData.rejected]: (state) => {
    state = Object.assign(state, {
      searchDataError: true,
      searchDataLoading: false,
    });
  },

});

export default reducer;
