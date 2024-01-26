import React from 'react';
import { useSelector } from 'react-redux';

function FieldDisplay() {
  const fields = useSelector((state) => state.fields);

  return (
    <div>
      <h2>Field Display</h2>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>
            <strong>{field.fieldName}</strong>: {field.fieldType}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FieldDisplay;
