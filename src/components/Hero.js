import React, { useState } from 'react'
import './Hero.css'
import { nanoid } from "nanoid";
import data from '../mock-data.json';
import Left from './Left';

const Hero = () => {
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

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

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
            <div className='section'>
                <div className='container'>
                    <div className='content'>
                        <Left/>
                        <div className='right'>
                        <div className='ht'>
                            <form className='top-bar' onSubmit={handleAddFormSubmit}>
                                <input type="text" name='ID' required="required" placeholder="ID" onChange={handleAddFormChange}/>
                                <input type="text" name='Name' required="required" placeholder="Name" onChange={handleAddFormChange}/>
                                <input type="text" name='Age' required="required" placeholder="Age" onChange={handleAddFormChange}/>
                                <input type="text" name='School' required="required" placeholder="School" onChange={handleAddFormChange}/>
                                <input type="text" name='Class' required="required" placeholder="Class" onChange={handleAddFormChange}/>
                                <input type="text" name='Division' required="required" placeholder="Division" onChange={handleAddFormChange}/>
                                <input type="text" name='Status' required="required" placeholder="Status" onChange={handleAddFormChange}/> 
                                <button type='submit'>Add</button>
                            </form> 
                            <div className='details'>
                                <div className='recentOder'>
                                    <table>
                                        <thead>
                                            <tr>
                                            <td>ID</td>
                                            <td>Name</td>
                                            <td>Age</td>
                                            <td>School</td>
                                            <td>Class</td>
                                            <td>Division</td>
                                            <td>Status</td>
                                            {/* <td>Edit</td> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {contacts.map((contact)=> (
                                            <tr>
                                                <td>{contact.ID}</td>
                                                <td>{contact.Name}</td>
                                                <td>{contact.Age}</td>
                                                <td>{contact.School}</td>
                                                <td>{contact.Class}</td>
                                                <td>{contact.Division}</td>
                                                <td>{contact.Status}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
