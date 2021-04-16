const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connect to MongoDB'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/users', users)

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)})