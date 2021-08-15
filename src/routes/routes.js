'use strict'

app.get('/', (req, res) => {
    // should respond with a the message below. 
    res.send('Hey, you hit my get route!');
});

app.post('/', (req, res) => {
    // should respond with a the message below. 
    res.send('Hey, you hit my post route!');
});

app.put('/', (req, res) => {
    // should respond with a the message below. 
    res.send('Hey, you hit my put route!');
});

app.delete('/', (req, res) => {
    // should respond with a the message below. 
    res.send('Hey, you hit my delete route!')
});

