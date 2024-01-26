import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addField } from './actions';

function FieldForm() {
    const [fieldName, setFieldName] = useState('');
    const [fieldType, setFieldType] = useState('Text');
    const [fields, setFields] = useState(false);
    const [fieldValidation, setFieldValidation] = useState('');
    const [fieldData, setFieldData] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [count, setCount] = useState(0);
    const [fieldTypeBtn, setFieldTypeBtn] = useState(false);
    const dispatch = useDispatch();

    const HandleSetFields = () => {
        setFields(true);
    }
    const handleAddField = () => {
        // dispatch(addField(fieldName, fieldType, fieldValidation, fieldData));
        if (count < 4) {
            setFieldTypeBtn(true);
            setCount(count + 1);
        }
        else {
            alert("Only 4 fields allowed");
        }
        setFieldName('');
        setFieldValidation('');
        setFieldData('');
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setFieldName('');
        setFieldValidation('');
        setFieldData('');
    };

    return (
        <div className='Main'>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option disabled value="">Select</option>
                <option value="Student">Student</option>
                <option value="Self-Employee">Self-Employee</option>
                <option value="Business">Business</option>
            </select>

            <div className='Btn-1'>
                <button onClick={handleAddField}>Add Field</button>
            </div>
            <div className='fieldtypes'>
                {fieldTypeBtn &&
                    <select value={selectedOption} onChange={handleFieldChange}>
                        <option disabled value="">Select</option>
                        <option value="text">Text Box</option>
                        <option value="dropdown">Dropdown</option>
                        <option value="date">Date Picker</option>
                    </select>}
            </div>
            {fields &&
                <div className='fields'>
                    asdf
                </div>
            }

        </div>
    );
}

export default FieldForm;
