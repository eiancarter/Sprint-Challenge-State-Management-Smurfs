import React, { useState } from 'react';

const AddSmurfForm = (props) => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        height: '',
        age: 0
    });
    const handleAddSmurf = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewSmurf({...newSmurf, [name]: value });
    }
    return (
        <div>
            <form 
                onSubmit={
                    e => { 
                    e.preventDefault(); 
                    props.addSmurfMember(newSmurf); 
                    setNewSmurf({ name: '', age: 0, height: '' })
                    }
                }
            >
                <input 
                    type='text' 
                    name='name'
                    value={newSmurf.name} 
                    onChange={e => handleAddSmurf(e)} 
                    placeholder='name'
                />
                <input 
                    type='text'
                    name='age' 
                    value={newSmurf.age} 
                    onChange={e => handleAddSmurf(e)} 
                    placeholder='age'
                />
                <input 
                    type='text'
                    name='height' 
                    value={newSmurf.height} 
                    onChange={e => handleAddSmurf(e)} 
                    placeholder='height'
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddSmurfForm;