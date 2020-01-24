import React, { useState } from "react";

const SmurfCard = props => {
  const [smurf, editSmurf] = useState(props.smurf);
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const editSmurfHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    editSmurf({ ...smurf, [name]: value });
  };

  return (
    <>
      <h1>{props.smurf.name}</h1>
      <button onClick={toggleEdit}>Edit Smurf</button>
      <button onClick={() => props.delete(props.smurf)}>Delete Smurf</button>
      {edit ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            props.upDate(smurf);
            toggleEdit();
          }}
        >
          <input
            type="text"
            name="name"
            value={smurf.name}
            onChange={e => editSmurfHandler(e)}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={smurf.age}
            onChange={e => editSmurfHandler(e)}
            placeholder="Age"
          />
          <input
            type="text"
            name="height"
            value={smurf.height}
            onChange={e => editSmurfHandler(e)}
            placeholder="Height"
          />
          <button>Finish Editing</button>{' '}
        </form>
      ) : null}
    </>
  );
};

export default SmurfCard;