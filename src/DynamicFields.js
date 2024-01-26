import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DynamicFields.css';
function DynamicFields() {
    const [mainOption, setMainOption] = useState('');
    const handleOptionChange = (e) => {
        setMainOption(e.target.value);
    };

    const fields = useSelector((state) => state.fields || []);
    const textBoxes = fields.filter((i) => i.field === 'textbox')
    const dates = fields.filter((i) => i.field === 'date')
    const dropdowns = fields.filter((i) => i.field === 'dropdown')
    const a = dropdowns.map((i) => i.fData);
    const b = a.map((j) => j.split('\n'));
    return (
        <div className='dynamic-fields-container'>
            <h2>Dynamic Fields</h2>

            <label>Select Type</label>
            <select value={mainOption} onChange={handleOptionChange}>
                <option disabled value="">Select</option>
                <option value="Student">Student</option>
                <option value="Self-Employee">Self-Employee</option>
                <option value="Business">Business</option>
            </select>

            {textBoxes && textBoxes.map((i) => {
                return (
                    <div>
                        <label>{i.fName}: </label>
                        {i.fMan === 'yes' && <input type='text' max={i.fValidation} required />}
                        {i.fMan === 'no' && <input type='text' max={i.fValidation} />}
                    </div>)
            })}

            {b && dropdowns.map((i)=>{return (<label>{i.fName}</label>)}) && (
                <div>
                    {b.map((subArray, i) => (
                        <select required key={i}>
                            {subArray.map((item, j) => (
                                <option key={`${i}-${j}`}>{item}</option>
                            ))}
                        </select>
                    ))}
                </div>
            )}



            {dates.map((i)=>{
                    return(
                    <div>
                    <label>{i.fName}: </label>
                    {i.fMan==='yes' && <input type={i.field} max={i.fValidation.substring(14)} min={i.fValidation.substring(0,10)} required/>}
                    {i.fMan==='no' && <input type={i.field} max={i.fValidation.substring(14)} min={i.fValidation.substring(0,10)} />}
                    </div>)
                })}


            <button type='submit'>Submit</button>

        </div>
    )
}

export default DynamicFields;