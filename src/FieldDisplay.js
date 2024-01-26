import React from 'react';
import { useSelector } from 'react-redux';

function FieldDisplay() {
  const fields = useSelector((state) => state.fields);

  return (
    <div>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>
            {field.fNo}: {field.fName}: {field.fType} : {field.fValidation}: {field.fMan}: {field.fData}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FieldDisplay;
