import {Action, VisibilityFilter} from '../const';

export default function visibilityFilter(state = VisibilityFilter.SHOW_ALL, action) {
    switch (action.type) {
        case Action.SET_VISIBILITY_FILTER:
        	return Object.assign({}, state, {visibilityFilter: action.filter});
        default:
            return state;
    }
}