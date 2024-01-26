import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function DynamicFields() {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const fields = useSelector((state) => state.fields || []);
console.log()
  return (
    <div>
        <h2>Dynamic Fields</h2>

        <label>Select Type</label>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option disabled value="">Select</option>
                <option value="Student">Student</option>
                <option value="Self-Employee">Self-Employee</option>
                <option value="Business">Business</option>
            </select>

    </div>
  )
}

export default DynamicFields;