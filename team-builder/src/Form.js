import React, { useState } from 'react';

const Form = props => {

    const [newMember, setNewMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChange = (event) => {
        setNewMember({ 
            ...newMember, 
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setTeamMember([
            newMember,
            ...props.teamMember,
        ]);
    }

    const resetForm = (event) => {
        event.preventDefault();
        setNewMember({
            name: "",
            email: "",
            role: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text" 
                name="name"
                placeholder="Name"
                value={newMember.name}
            />

            
            <input
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Email"
                value={newMember.email}
            />

            <input
                onChange={handleChange}
                type="text"
                name="role"
                placeholder="Role"
                value={newMember.role}
            />


            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    )
}

export default Form;