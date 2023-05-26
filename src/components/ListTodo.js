import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoSlice } from '../redux/reducers/todoSlice';
import { editSlice } from '../redux/reducers/editSlice';

const ListTodo = ()=>{
    const dispatch = useDispatch();
    const listTodo = useSelector(state=>state.todos)
  return (
    <div>
        <h1>Danh sách công việc</h1>
        <table style={{width:"60%", margin:"0 auto"}} border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Task</th>
                    <th colSpan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    listTodo.map((todo,index)=><tr key={todo.id}>
                    <td>{index+1}</td>
                    <td>{todo.id}</td>
                    <td>{todo.task}</td>
                    <td><button onClick={()=>dispatch(editSlice.actions.editTask({index,task:todo.task}))}>Edit</button></td>
                    <td><button onClick={()=>dispatch(todoSlice.actions.deleteTodo(index))}>DELETE</button></td>
                </tr>)
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListTodo
