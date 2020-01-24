import React, { useState } from 'react';

export default function AddSmurfForm (props) {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        height: '',
        age: ''
    });
    const handleAddSmurf = (e) => {
        const name = e.target.name;
        const value = e.target.name;
        setNewSmurf({...newSmurf, [name]: value });
    }
    return (
        <div>
            <form onSubmit={e => { e.preventDefault(); props.addSmurfMember(newSmurf); setNewSmurf({ name: '', age: 0, height: '' })}}>
                <input type='text' value={newSmurf.name} onChange={e => handleAddSmurf(e)} placeholder='name'/>
                <input type='text' value={newSmurf.age} onChange={e => handleAddSmurf(e)} placeholder='age'/>
                <input type='text' value={newSmurf.height} onChange={e => handleAddSmurf(e)} placeholder='height'/>
                <button>Submit</button>
            </form>
        </div>
    )
}