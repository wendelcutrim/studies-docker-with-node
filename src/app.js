const express = require('express');
const methodOverride = require('method-override');

const app = express();
const port = process.env.NODE_PORT || 3000;

//Routes import
const indexRoute = require('./routes/index');

//Middlewares
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//Routes
app.use('/', indexRoute);

// Not found route
app.use((req, res, next) => {
    res.status(404).json('not-found');
});

app.listen(port, () => console.log(`The server is running at ${port}`));