import React, { useState } from 'react'
import './Studentad.css'
import { nanoid } from "nanoid";
import data from '../mock-data.json';
import Hero from './Hero';

const StudentAdd = ({
    handleAddFormChange
}) => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        ID: '',
        Name: '',
        Age: '',
        School: '',
        Class: '',
        Division: '',
        Status: ''
    })

    // const handleAddFormChange = (event) => {
    //     event.preventDefault();

    //     const fieldName = event.target.getAttribute('name');
    //     const fieldValue = event.target.value;

    //     const newFormData = {...addFormData};
    //     newFormData[fieldName] = fieldValue;

    //     setAddFormData(newFormData);
    // }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id:nanoid(),
            ID: addFormData.ID,
            Name: addFormData.Name,
            Age: addFormData.Age,
            School: addFormData.School,
            Class: addFormData.Class,
            Division: addFormData.Division,
            Status: addFormData.Status
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }
    return (
        <>
        <div className='addstudent'>
            <div className='add'>
                <form onSubmit={handleAddFormSubmit}>
                    <label>
                        ID:
                        <input type="text" name='ID' required="required" placeholder="ID" value={addFormData.ID} onChange={handleAddFormChange}/>
                    </label>
                    <label>
                        Name: 
                        <input type="text" name='Name' required="required" placeholder="Name" value={addFormData.Name} onChange={handleAddFormChange}/>
                    </label>
                    <label>
                        Age:
                        <input type="text" name='Age' required="required" placeholder="Age" value={addFormData.Age} onChange={handleAddFormChange}/>
                    </label>
                    <label>
                        School:
                        <input type="text" name='School' required="required" placeholder="School" value={addFormData.School} onChange={handleAddFormChange}/>
                    </label>
                    <label>
                        Class:
                        <input type="text" name='Class' required="required" placeholder="Class" value={addFormData.Class} onChange={handleAddFormChange}/>
                    </label>
                    <label>
                        Division:
                        <input type="text" name='Division' required="required" placeholder="Division" value={addFormData.Division} onChange={handleAddFormChange}/>
                    </label>
                    <label>
                        Status:
                        <input type="text" name='Status' required="required" placeholder="Status" value={addFormData.Status} onChange={handleAddFormChange}/>
                    </label>
                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default StudentAdd
