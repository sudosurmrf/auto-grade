const { configureStore, createSlice } = require('@reduxjs/toolkit');
const cloneSlice = createSlice({
  name: 'clone',
  initialState: {
    logs: [],
    nestedFolder: null,
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
    nestedFolderSet(state, action) {
      state.nestedFolder = action.payload.nestedFolder;
      state.logs.push({
        type: 'nesteFolderSet',
        nestedFolder: action.payload.nestedFolderSet,
      });
    },
    nestedFolderReset(state) {
      state.nestedFolder = '';
      state.logs.push({
        type: 'nestedFolderReset',
      });
    },
    folderDelete(state, action){
      state.logs.push({
        type: 'folderDelete',
        folderPath: action.payload.folderPath,
        timestamp: new Date().toISOString(),
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
