export default {
  addMoveToHistory(state, payload) {
    state.moveLog.push(payload);
  },
};
