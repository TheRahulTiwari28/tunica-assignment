import React from 'react'
import Left from '../components/Left'
import StudentAdd from '../components/StudentAdd'

const AddStudent = () => {
    return (
        <>
        <div className='section'>
                <div className='container'>
                    <div className='content'>
                        <Left/>
                        <StudentAdd />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStudent
