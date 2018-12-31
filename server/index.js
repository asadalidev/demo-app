const express = require('express');
const cors = require('cors');
const app = express();

const students = require('./routers/students');

app.use(cors());
app.use(express.json());
app.use('/api/students', students);


app.listen(3000, () => console.log('Listening on port 3000.'));