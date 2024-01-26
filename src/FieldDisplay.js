import React from 'react';
import { useSelector } from 'react-redux';

function FieldDisplay() {
    const fields = useSelector((state) => state.fields || []);

    return (
        <div>
            <h2>Field Display</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Field No</th>
                        <th>Field Name</th>
                        <th>Field Type</th>
                        <th>Field Validation</th>
                        <th>Field Mandatory</th>
                        <th>Field Data</th>
                    </tr>
                </thead>
                <tbody>
                    {fields.map((field, index) => (
                        <tr key={index}>
                            <td>{field.fNo}</td>
                            <td>{field.fName}</td>
                            <td>{field.fType}</td>
                            <td>{field.fValidation}</td>
                            <td>{field.fMan}</td>
                            <td>{field.fData}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FieldDisplay;


