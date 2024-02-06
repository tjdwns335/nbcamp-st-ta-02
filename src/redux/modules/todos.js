// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

const initialState = [
  {
    id: shortid.generate(),
    title: "리덕스를 배우자",
    body: "리덕스 실습을 해보자",
    isDone: false,
  },
];
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  }
}
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  }
}
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  }
}

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = action.payload;
      return [...state, newTodos]; //TODO: 여기 작성

    case DELETE_TODO:
      const todosId = action.payload;
      return state.filter((item) => item.id !== todosId); //TODO: 여기 작성

    case SWITCH_TODO:
      const switchTargetId = action.payload
      const switchMappedList = state.map((item) => {
        if (item.id === switchTargetId) {
          return {
            ...item,
            isDone: !item.isDone,
          }
        }
        return item;
      })
      return switchMappedList;
    default:
      return state;
  }
};

export default todos;
