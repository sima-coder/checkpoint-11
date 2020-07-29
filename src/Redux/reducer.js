const initialState = {
    count: 0
  };

  const reducer = (state = initialState, action) => {
    console.log('reducer', state, action);
    // console.log(state);
    // console.log(action);
    // return state;

    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      case 'RESET':
        return {
          count: 0
        };
      default:
        return state;
    }
    
  }
  

  export default reducer;