import React from "react";
import axios from "axios";
const App = ({ state }) => {
  return (
    <div>
      <h1>
        {state.appName}
      </h1>
      <p>React here!</p>
      <p>i like vue , but i'm prefer react</p>

      <p>
        yep ! i'm {state.user.name},{state.user.age} years old . and i'm agree with your sense. the submit form it's below
      </p>
      <p>
        {state.pizza.split(',').length}
      </p>
      <ol>
        {state.pizza.split(',').map(a => <li>{a}</li>)}
      </ol>

      <PizzaForm space={state} />
    </div>
  );
};
export default App;

export const delay = (duration) => new Promise((resolve, reject) => setTimeout(resolve, duration));


let state = { pizza: '' };

const fetchPizza = async (data) => {
  await delay(2000);

  state.pizza += (data.name + ',');
  return {
    data: state,
    error: ''
  }
}


const handleSubmit = async ({ space, merge }, event) => {
  event.preventDefault();

  // merge does a shallow merge, allowing the assignment of multiple properties at once
  merge({ saving: true }); // updates space immediately, triggers re-render

  const { data, error } = await fetchPizza({ name: space.name });
  if (error) return merge({ error: errorMsg, saving: false });

  merge({
    saving: false,
    pizza: data.pizza // 'Pepperoni', hopefully
  });
};

/*
  handleReset is another custom action.
  This one erases all properties on the space,
  replacing them with only the specified ones.
*/
const handleReset = ({ replace }) => {
  replace({
    name: '',
    pizzaLover: false
  });
};

export const PizzaForm = ({ space }) => (
  <form onSubmit={space(handleSubmit)}>
    {/* ... some input elements */}
    <label>Name</label>
    <input
      type="text"
      value={space.name || ''}
      onChange={space('name')} // Whenever user types, `space.name` is updated
    />
    <label>Do you like pizza?</label>
    <input
      type="checkbox"
      checked={space.pizzaLover || false}
      onChange={space('pizzaLover')} // Assigns true or false to `space.pizzaLover`
    />
    <div>
      {space.saving && 'isSaving....'}
    </div>
    <p className="error">{space.errorMsg}</p>
    <button disabled={space.saving} type="submit">Get Pizza</button>
    <button disabled={space.saving} type="button" onClick={space(handleReset)}>Reset</button>
  </form>
);