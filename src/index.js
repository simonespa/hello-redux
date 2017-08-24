import store from './store';

import {
	addTodo,
	toggleTodo
} from './action';

console.log(
	JSON.stringify(store.getState(), null, 2)
);	

let unsubscribe = store.subscribe(() => {
	console.log(
  		JSON.stringify(store.getState(), null, 2)
  	);	
});

// Dispatch some actions
store.dispatch(addTodo('Todo 1'));
store.dispatch(addTodo('Todo 2'));

unsubscribe();