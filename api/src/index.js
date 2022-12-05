const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./db')
const app = express();
const tasks = require('./routes/task.routes');

// SETTINGS

app.set('port', process.env.PORT || 3000)

// MIDDLEWARES

app.use(morgan('dev'));
app.use(express.json());

// ROUTES

app.use("/api/tasks", tasks)

// STATIC FILES

app.use(express.static(path.join('C:/Users/Fran Tejada/Desktop/Documentos/MERN/client/public')))

// STARTING THE SERVER

app.listen(3000, () => {
    console.log(`server on port ${app.get('port')}`)
});