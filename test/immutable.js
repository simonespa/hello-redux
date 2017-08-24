const { Map } = require('immutable');

const copy1 = Map({
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {
            text: "Buy Milk",
            completed: false
        },
        {
            text: "Wash car",
            completed: true
        }
    ]
});

const copy2 = copy1.set('visibilityFilter', 'SHOW_COMPLETED');

console.log(copy1.get('visibilityFilter'));
console.log(copy2.get('visibilityFilter'));