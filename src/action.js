import {Action} from './const';

export function addTodo(text) {
    return { type: Action.ADD_TODO, text };
}

export function toggleTodo(index) {
    return { type: Action.TOGGLE_TODO, index };
}

export function completeTodo(index) {
    return { type: Action.COMPLETE_TODO, index };
}

export function openTodo(index) {
    return { type: Action.OPEN_TODO, index };
}

export function setVisibilityFilter(filter) {
    return { type: Action.SET_VISIBILITY_FILTER, filter };
}