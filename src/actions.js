export const addField = (field) => {
    return {
      type: 'ADD_FIELD',
      payload: field,
    };
  };

  export const resetFields = () => ({
    type: 'RESET_FIELDS',
  });
  