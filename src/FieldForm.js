import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addField, resetFields } from './actions';
import './FieldForm.css';

function FieldForm() {
    const [fNo, setFNo] = useState(useSelector(state => state.fNo) || 0);
    const [fName, setFName] = useState(useSelector(state => state.fName) || '');
    const [fType, setFType] = useState(useSelector(state => state.fType) || '');
    const [fValidation, setFValidation] = useState(useSelector(state => state.fValidation) || '');
    const [fData, setFData] = useState(useSelector(state => state.fData) || '');
    const [fMan, setFMan] = useState(useSelector(state => state.fMan) || '');
    const [field, setField] = useState(useSelector(state => state.field) || '');
    const [selectedOption, setSelectedOption] = useState(useSelector(state => state.selectedOption) || '');
    const [fieldTypeBtn, setFieldTypeBtn] = useState(useSelector(state => state.fieldTypeBtn) || false);

    const dispatch = useDispatch();

    useEffect(() => {
        setFNo(localStorage.getItem('fNo') || 0);
        setFName(localStorage.getItem('fName') || '');
        setFType(localStorage.getItem('fType') || '');
        setFValidation(localStorage.getItem('fValidation') || '');
        setFData(localStorage.getItem('fData') || '');
        setFMan(localStorage.getItem('fMan') || '');
        setField(localStorage.getItem('field') || '');
        setSelectedOption(localStorage.getItem('selectedOption') || '');
        setFieldTypeBtn(localStorage.getItem('fieldTypeBtn') === 'true');
    }, []);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setFName('');
        setFType('');
        setFValidation('');
        setFData('');
        setFMan('');
        setField('');
    };

    const handleAddField = () => {
        if ((fNo < 4) && (selectedOption === "Student" || selectedOption === "Self-Employee" || selectedOption === "Business")) {
            setFieldTypeBtn(true);
        } else if (fNo > 4) {
            alert("Only 4 fields allowed, reset if you want to clear all data and add new");
        } else {
            alert("Select an option");
        }
    };

    const handleFieldChange = (e) => {
        setFName('');
        setFType('');
        setFValidation('');
        setFData('');
        setFMan('');
        setField(e.target.value);
    };

    const handleConfirm = () => {
        setFNo(fNo + 1);
        console.log(fNo + " " + fName + " " + fType + " " + fValidation + " " + fMan + " " + fData)
        if (fNo <= 4)
            dispatch(addField({
                fNo,
                fName,
                fType,
                fValidation,
                fData,
                fMan,
                field,
                selectedOption,
            }));
        else
            alert("Only 4 fields allowed, reset if you want to clear all data and add new");
    };

    const handleReset = () => {
        setFName('');
        setFType('');
        setFValidation('');
        setFData('');
        setFMan('');
        setField('');
        setField('');
        setFieldTypeBtn(false);
        dispatch(resetFields());

    }

    return (
        <div className='Main'>
            <label>Dynamic Data Collection</label>
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
                    <div>
                        <label>Field Type: </label>
                        <select value={field} onChange={handleFieldChange}>
                            <option disabled value="">Select</option>
                            <option value="textbox">Text Box</option>
                            <option value="dropdown">Dropdown</option>
                            <option value="date">Date Picker</option>
                        </select>
                    </div>
                }

                {field === "textbox" &&
                    <div className='fields'>
                        <label>Field Display Name: </label>
                        <input type='text' value={fName} onChange={(e) => setFName(e.target.value)} />
                        <label>Field Data Type: </label>
                        <select value={fType} onChange={(e) => setFType(e.target.value)}>
                            <option disabled value=''>Select</option>
                            <option value='number'>Number</option>
                            <option value='string'>String</option>
                            <option value='date'>Date</option>
                        </select>
                        <label>Field Max Length Allowed: </label>
                        <input type='number' value={fValidation} onChange={(e) => setFValidation(e.target.value)} />
                        <label>Mandatory: </label>
                        <select value={fMan} onChange={(e) => setFMan(e.target.value)}>
                            <option value='' disabled>Select</option>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                        <label>Field Data: </label>
                        <input type='text' value={fData} onChange={(e) => setFData(e.target.value)} />
                    </div>
                }

                {field === "dropdown" &&
                    <div className='fields'>
                        <label>Field Display Name: </label>
                        <input type='text' value={fName} onChange={(e) => { setFName(e.target.value); setFValidation('Nil') }} />
                        <label>Field Data Type: </label>
                        <select value={fType} onChange={(e) => setFType(e.target.value)}>
                            <option value='' disabled>Select</option>
                            <option value='number'>Number</option>
                            <option value='string'>String</option>
                            <option value='date'>Date</option>
                        </select>
                        <label>Field Validation: </label>
                        <input type='text' disabled value='Nil' />
                        <label>Mandatory: </label>
                        <select value={fMan} onChange={(e) => setFMan(e.target.value)}>
                            <option value='' disabled>Select</option>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                        <label>Field Data: </label>
                        <textarea value={fData} onChange={(e) => setFData(e.target.value)} />
                    </div>
                }

                {field === "date" &&
                    <div className='fields'>
                        <label>Field Display Name: </label>
                        <input type='text' value={fName} onChange={(e) => setFName(e.target.value)} />
                        <label>Field Data Type: </label>
                        <select value={fType} onChange={(e) => setFType(e.target.value)}>
                            <option value='' disabled>Select</option>
                            <option value='number'>Number</option>
                            <option value='string'>String</option>
                            <option value='date'>Date</option>
                        </select>
                        <label>Min Date: </label>
                        <input type='date' onChange={(e) => setFValidation(e.target.value + " to")} />
                        <label>Max Date: </label>
                        <input type='date' onChange={(e) => setFValidation(fValidation + e.target.value)} />
                        <label>Mandatory: </label>
                        <select value={fMan} onChange={(e) => setFMan(e.target.value)}>
                            <option value='' disabled>Select</option>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                        <label>Field Data: </label>
                        <input type='text' value={fData} onChange={(e) => setFData(e.target.value)} />
                    </div>
                }

                {(field === 'textbox' || field === 'dropdown' || field === 'date') &&
                    <div>
                        <button onClick={handleConfirm}>Confirm</button>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default FieldForm;
