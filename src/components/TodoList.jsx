import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../redux/modules/todos';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const deleteBtn = (id) => {
    dispatch(deleteTodo(id));
  }
  return (
    <>
      {
        todos.map((item) => {
          return (
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div>
                <button onClick={() => deleteBtn(item.id)}>삭제</button>
                <button>완료</button>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default TodoList