import {Action} from '../const';

export default function todos(state = [], action) {
    switch (action.type) {
        case Action.ADD_TODO:
            let newState = Object.assign([], state);
            newState.push({
                text: action.text,
                completed: false
            });
            return newState
        case Action.TOGGLE_TODO:
            return Object.assign([], state.map((todo, index) => {
                if (index === action.index) {
                    return {
                        text: todo.text,
                        completed: !todo.completed
                    }
                }
                return todo;
            }));
        default:
            return state;
    }
}