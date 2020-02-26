const reverseString = require('./reverseString');

test('reverseString function exists', () => {
	expect(reverseString).toBeDefined();
});

test('string actually gets reversed', () => {
	expect(reverseString('there')).toEqual('ereht');
});

test('string actually gets reversed using uppercase', () => {
	expect(reverseString('THERE')).toEqual('ereht');
});