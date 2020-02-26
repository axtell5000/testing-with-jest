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
});

// Arrays
test('admin should be in usernames', () => {
	usernames = ['Peter', 'Stephen', 'admin', 'Meg'];
	expect(usernames).toContain('admin');
})

// Testing Async data

// Promises
test('User fetched name should be Ervin Howell', () => {
	expect.assertions(1);
	return functions.fetchUser()
		.then(data => {
			expect(data.name).toEqual('Ervin Howell');
		});
});

// Async Await
test('User fetched username should be Antonette', async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();		
	expect(data.username).toEqual('Antonette');	
});

// using beforeEach etc

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Ryan', () => {
    const user = 'Ryan';
    expect(user).toBe('Ryan');
  });

  test('User is Susan', () => {
    const user = 'Susan';
    expect(user).toBe('Susan');
  });
});