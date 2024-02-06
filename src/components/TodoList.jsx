import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, switchTodo } from '../redux/modules/todos';
import { useNavigate } from 'react-router-dom';

function TodoList({ isActive }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const deleteBtn = (id) => {
    dispatch(deleteTodo(id));
  }
  const switchBtn = (id) => {
    dispatch(switchTodo(id));
  }
  const navigate = useNavigate()
  return (
    <>
      <h2>{!isActive ? "해야할것" : "다한것"}</h2>
      {
        todos.filter((item) => item.isDone === isActive)
          .map((item) => {
            return (
              <div key={item.id} onClick={() => navigate(`/${item.id}`)}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div>
                  <button onClick={() => deleteBtn(item.id)}>삭제</button>
                  <button onClick={() => switchBtn(item.id)}>{!isActive ? "완료" : "취소"}</button>
                </div>
              </div>
            )
          })
      }
    </>
  )
}

export default TodoList