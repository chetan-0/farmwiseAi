const initialState = {
    fields: [],
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FIELD':
        return {
          ...state,
          fields: [...state.fields, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  