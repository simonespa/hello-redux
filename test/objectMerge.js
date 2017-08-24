let state = [{ text: 'Some text', completed: false }];

let object = Object.assign([], state);
object.push({text: 'Other Text', completed: false});
console.log(JSON.stringify(
	object,
	null,
	2
));