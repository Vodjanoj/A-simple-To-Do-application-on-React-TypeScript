import React from "react";
import Todo from "../models/todo"

// We can use such a generic type for props or to be precise, a functional component out of the box
// can be turned, can be converted into a generic function. Which then simply means that in the end
// our functional component will be configured such that we make it clear that it will be our React component function
// and that it will have all those base props like children. And we can then define explicitly our own props
// like the items prop, for example here, that should be combined into the props object.
// FC that's a type defined in this React package or to be precise by this typesreact package
// but we can just import React from React and the rest will be done behind the scenes.
// Now what React.FC in the end does as a type definition is it makes it clear that this here is a function
// that acts as a functional component.
// This angle brackets syntax is the generic type syntax here, and by adding it here, we actually unlock a feature
// built into this FC type, which we're using here, which we'll merge, whichever object type we're defining here
//with that base object type, with the children property.

// Todo, we can set class as a type
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
