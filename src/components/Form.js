import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { todoSlice } from '../redux/reducers/todoSlice';
import { editSlice } from '../redux/reducers/editSlice';

export const Form = () => {
    const [newTask, setNewTask] = useState("");
    const editTask = useSelector(state=>state.editTask)
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(editTask.id===""){
       dispatch(todoSlice.actions.createTodo(newTask))
       setNewTask("");
        }else{
        dispatch(todoSlice.actions.updateTodo({...editTask,task:newTask}))
        setNewTask("");
        dispatch(editSlice.actions.editTask({id:"",task:""}))
        }
    }
    useEffect(()=>{
      setNewTask(editTask.task)
    },[editTask])
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button type="submit">{editTask.id===""?"ADD":"UPDATE"}</button>
    </form>
  )
}
