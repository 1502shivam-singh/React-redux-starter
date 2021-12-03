import React from "react"
import { useDispatch } from "react-redux";
import { removeTask } from "../todolistSlice"

const Task = (props) => {

    const dispatch = useDispatch();

    const deleteTask = (e) => {
        dispatch(removeTask(props.pos));
    }

    return (
        <p onClick={deleteTask}>{props.task}</p>
    );
}

export default Task;