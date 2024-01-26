import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function DynamicFields() {
    const [mainOption, setMainOption] = useState('');
    const handleOptionChange = (e) => {
        setMainOption(e.target.value);
    };

    const fields = useSelector((state) => state.fields || []);
    const textBoxes = fields.filter((i)=>i.field==='text')
    const dropdowns = fields.filter((i)=>i.field==='dropdown')
    const dates = fields.filter((i)=>i.field==='date')
console.log(fields)
  return (
    <div>
        <h2>Dynamic Fields</h2>

        <label>Select Type</label>
            <select value={mainOption} onChange={handleOptionChange}>
                <option disabled value="">Select</option>
                <option value="Student">Student</option>
                <option value="Self-Employee">Self-Employee</option>
                <option value="Business">Business</option>
            </select>

            <form>
                {/* {field==='text'&& 
                    <div>
                        <label>{}</label>
                    </div>
                }
                {field === 'dropdown' &&

                }

                {field === 'date'&&

                } */}
            </form>
            

    </div>
  )
}

export default DynamicFields;