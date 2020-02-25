const functions = require('./functions');

test('Add 2 + 2 to equal 4', () => {
	expect(functions.add(2,2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 5', () => {
	expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Stephen Axtell object', () => {
	expect(functions.createUser()).toEqual({
		firstName: 'Stephen',
		lastName: 'Axtell'
	});
});

test('Should be under 2000', () => {
	const num1 = 700;
	const num2 = 800;
	expect(num1 + num2).toBeLessThan(2000);
});

// regex
test('Should be no I in team', () => {
	expect('team').not.toMatch(/I/);
})
