import { connect } from 'react-redux';
import React from 'react';
// import { ConnectedTaskListItem } from './TaskListItem';

export const TaskList = ({tasks,name,createNewTask,id})=>(
    <div className="card p-2 m-2">
        <h2>
            {name}
        </h2>
        <div>
            {tasks.map(task=>(
                <div>{task.name}</div>
            ))}
        </div>
    </div>
);

const mapStateToProps = (state, {name, id})=>{
    return {
        name:name,
        tasks: state.tasks.filter(task=>task.group === id),
        id
    };
};

const mapDispatchToProps = (dispatch, {id})=>({
    createNewTask(){
        dispatch(requestTaskCreation(id));
    }
});

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);