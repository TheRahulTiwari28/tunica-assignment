import React from 'react'
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri'

const Left = () => {
    return (
        <>
        
        <div className='left'>
            <div className='student'>
                <h1>Students</h1>
                <NavLink to='/'>
                    <RiArrowDropDownLine/>
                </NavLink>
            </div>
            <div className='list'>
                <ul>
                    <li>
                        <NavLink to="/" exact>-view student</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addstudent" exact>-Add student</NavLink>
                    </li>
                </ul>
            </div>
        </div> 
        
        </>
    )
}

export default Left
