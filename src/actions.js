export const addField = (fNo, fName, fType, fValidation, fMan, fData) => ({
    type: 'ADD_FIELD',
    payload: { fNo, fName, fType, fValidation, fMan, fData  },
  });
  