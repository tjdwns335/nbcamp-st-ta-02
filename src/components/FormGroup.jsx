import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import shortid from "shortid";
import { addTodo } from '../redux/modules/todos';

function FormGroup() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    }
    if (!title) {
      alert('제목을 입력해주세요');
      return
    }
    if (!body) {
      alert('내용을 입력해주세요');
      return
    }
    dispatch(addTodo(newTodo));
  }
  const titleChange = (e) => {
    setTitle(e.target.value);
  }
  const bodyChange = (e) => {
    setBody(e.target.value);
  }
  return (
    <form>
      <label>제목 : </label>
      <input
        type="text"
        value={title}
        onChange={titleChange}
      />
      <label>내용 : </label>
      <input
        type="text"
        value={body}
        onChange={bodyChange}
      />
      <div>
        <button onClick={addHandler}>추가하기</button>
      </div>
    </form>
  )
}

export default FormGroup