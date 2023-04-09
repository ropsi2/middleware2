const express = require('express');
const app = express();

const logIP1 = (req, res, next) => {
console.log('Middleware is apllying on the homepage with IP address is', req.ip);
next();
}

const logIP2 = (req, res, next) => {
console.log('Middleware is apllying on the about with  IP address is', req.ip);
next();
}

const logIP3 = (req, res, next) => {
console.log('Middleware is applying on the contact with the IP address is', req.ip);
next();
}

app.get('/', logIP1, (req, res) => {
res.send('This is the home page');
});

app.get('/about', logIP2, (req, res) => {
res.send('This is the about page');
});
app.get('/contact', logIP3, (req, res) => {
    res.send('This is the conatct  page');
    });

    app.listen(4000,()=>{
        console.log ('server started on port 4000');
    });