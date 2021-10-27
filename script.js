let names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']

names.forEach(name => {
    console.log(name + ' is in Deep Dive Bootcamp.')
});

const newValues = names.map(name => name + ' is kind.')

console.log(newValues)