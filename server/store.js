const { configureStore, createSlice } = require('@reduxjs/toolkit');
const cloneSlice = createSlice({
  name: 'clone',
  initialState: {
    logs: [],
  },
  reducers: {
    cloneStarted(state, action) {
      state.logs.push({
        type: 'cloneStarted',
        repoUrl: action.payload.repoUrl,
        destination: action.payload.destination,
      });
    },
    cloneSuccess(state, action) {
      state.logs.push({
        type: 'cloneSuccess',
        repoUrl: action.payload.repoUrl,
        destination: action.payload.destination,
      });
    },
    cloneError(state, action) {
      state.logs.push({
        type: 'cloneError',
        error: action.payload,
      });
    },
    downloadStarted(state, action) {
      state.logs.push({
        type: 'downloadStarted',
        repoUrl: action.payload.repoUrl,
        destination: action.payload.destination,
      });
    },
    downloadSuccess(state, action) {
      state.logs.push({
        type: 'downloadSuccess',
        repoUrl: action.payload.repoUrl,
        destination: action.payload.destination,
      });
    },
    downloadError(state, action) {
      state.logs.push({
        type: 'downloadError',
        error: action.payload,
      });
    },
  },
});

const store = configureStore({
  reducer: {
    clone: cloneSlice.reducer,
  },
});

module.exports = {
  store,
  cloneActions: cloneSlice.actions,
};
