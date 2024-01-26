export const addField = (fieldName, fieldType, fieldValidation, fieldData) => ({
    type: 'ADD_FIELD',
    payload: { fieldName, fieldType, fieldValidation, fieldData },
  });
  