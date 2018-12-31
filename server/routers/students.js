const express = require('express');
const router = express.Router();

const students = [{
        id: 1,
        name: 'Asad Ali'
    },
    {
        id: 2,
        name: 'Kamran Abbas'
    },
    {
        id: 3,
        name: 'Muhammad Ali'
    },
    {
        id: 4,
        name: 'Raza Hussain'
    }
];

router.get('/', (req, res) => {
    res.send(students);
});

router.get('/:id', (req, res) => {

    let studentId = parseInt(req.params.id);
    let student = students.find(s => s.id === studentId);

    res.send(student);
});

router.post('/', (req, res) => {

    let student = req.body;
    students.push(student);

    res.send(student);
});

module.exports = router;