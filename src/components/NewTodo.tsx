import { useRef } from "react";
import React from "react";
import classes from './NewTodo.module.css'
 

// FormEvent provided by our React package in the end which is this event object type
// which we'll get automatically when listening to the form submission.
// There also is a MouseEvent, for example, which you would get if you add onClick listener.

// void because this function doesn't return any value
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // useRef actually is a generic type out of the box
  // for input type will be HTMLInputElement
  // For a button, it would be the HTMLButtonElement.
  // But I'm still getting an error down there. And we're getting this error
  // because actually we have to set a default value here
  // because this ref could already be assigned to some other element maybe out of the box by default.
  // And that's why we should provide a starting value here and at the beginning  we have no connection
  // and therefore, the starting value is null.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // This question mark was added automatically by my IDE here because the ref is not necessarily set to a value yet
    // when we use it. Of course, here as a developer, we know that when the submitHandler is called,
    // todoTextInputRef will be connected to an element because this function can only be called when this form was submitted
    // and that form can only be submitted after this ref was connected.
    // But of course, theoretically, I could also try to extract a value right there (after  const todoTextInputRef for example),
    // and in that case, the ref would not be connected yet. And TypeScript doesn't deeply analyze our code.
    // In that case, this question mark addition here signals to TypeScript that it tries to access value, and if that succeeds,
    // the entered value will be stored in enteredText, but if that fails, if the connection should not be established yet,
    // null will be stored in enteredText.
    // Now, if you as a developer are sure though Now, if you as a developer are sure though there will be a non-null value,
    // so here, in this case, you know that the connection you can use an exclamation mark instead of a question mark.
    // This special annotation tells TypeScript that you know that this possibly nullish value will never be null in this spot.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
