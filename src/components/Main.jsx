import React from 'react'
import FormGroup from './FormGroup'
import TodoList from './TodoList'

function Main() {
  return (
    <>
      <FormGroup />
      <TodoList isActive={false} />
      <TodoList isActive={true} />
    </>
  )
}

export default Main