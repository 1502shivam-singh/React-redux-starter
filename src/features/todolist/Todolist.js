import React, {useRef} from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTask, selectTasks } from "./todolistSlice"

import Task from "./Component/Task";

export const Todolist = () => {

  const dispatch = useDispatch();
  const taskList = useSelector(selectTasks);

  const inputRef = useRef(0);
  const submitText = (e) => {
    const taskBlock = {
      task: inputRef.current.value,
      status: true,
    }
    dispatch(addTask(taskBlock))
    inputRef.current.value = null;
  }

  return (
    <>
      <div>
        <input ref={inputRef} type="text"></input>
        <button onClick={submitText}>Submit</button>
      </div>
      <div>
        {
          taskList.map((it, index)=>{
            return (
              <Task key={index} pos={index} task={it.task} />
            );
          })
        }
      </div>
    </>
  );
}
