import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    setTaskCompletion,
    setTaskGroup,
    setTaskName
} from '../store/mutations'

const TaskDetail = ({
    id,
    task,
    sessionID,
    groups,
    setTaskGroup,
    setTaskName
})=>{
    return (
        <div className="card p-3 col-6">
             <div>
                    <input type="text" value={task.name} onChange={setTaskName} className="form-control form-control-lg"/>
            </div>
            <form className="form-inline">
                <span className="mr-4">
                    Change Group
                </span>
                <select onChange={setTaskGroup} className="form-control">
                    {groups.map(group=>(
                        <option key={group.id} value={group.id}>
                            {group.name}
                        </option>
                    ))}
                </select>
            </form>

            <form className="form-inline" onSubmit={(e)=>addTaskComment(id,sessionID,e)}>
                <input type="text" name="commentContents" autoComplete="off" placeholder="Add a comment" className="form-control"/>
                <button type="submit" className="btn">Submit</button>
            </form>

            <div>
            <Link to="/dashboard">
                <button className="btn btn-primary mt-2">
                    Done
                </button>
            </Link>
            </div>
        </div>
    )
}

function mapStateToProps(state,ownProps){
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task=>task.id === id);
    let comments = state.comments.filter(comment=>comment.task === id);
    let groups = state.groups;

    return {
        id,
        task,
        comments,
        groups
    }
}

function mapDispatchToProps(dispatch, ownProps){
    let id = ownProps.match.params.id;
    return {
        setTaskCompletion(id,isComplete){
            dispatch(setTaskCompletion(id,isComplete));
        },
        setTaskGroup(e){
            dispatch(setTaskGroup(id,e.target.value));
        },
        setTaskName(e){
            dispatch(setTaskName(id,e.target.value));
        }
    }
}

export const ConnectedTaskDetail = connect(mapStateToProps,mapDispatchToProps)(TaskDetail);