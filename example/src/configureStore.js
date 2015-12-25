const createStore = (reducer, initialState) => {
  let currState = initialState;
  let currReducer = reducer;
  let listeners = [];

  return {
    dispatch: (action) => {
      currState = currReducer(currState, action);

      listeners.forEach(listener => listener());
    },
    getState: () => currState,
    subscribe: listener => {
      const index = listeners.length;

      listeners.push(listener);

      return () => {
        listeners.splice(index, 1);
      }
    }
  }
}

export default createStore;
