import React from "react";

// FormEvent provided by our React package in the end which is this event object type
// which we'll get automatically when listening to the form submission.
// There also is a MouseEvent, for example, which you would get if you add onClick listener.
const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
