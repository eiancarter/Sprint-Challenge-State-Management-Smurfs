import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurfMember, deleteSmurf, updateSmurf } from './actions';
import AddSmurfForm from './AddSmurfForm';
import SmurfCard from './SmurfCard';

const SmurfList = props => {

    return (
        <div>
            {props.smurfs.map(smurf => {
                return <SmurfCard key={smurf.id} smurf={smurf} delete={props.deleteSmurf} upDate={props.updateSmurf} />
            })}
            <button onClick={props.getSmurfs}>Get Roster</button>
            <AddSmurfForm addSmurfMember={props.addSmurfMember} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
};

export default connect(mapStateToProps, {getSmurfs, addSmurfMember, deleteSmurf, updateSmurf})(SmurfList);