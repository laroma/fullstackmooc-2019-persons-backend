const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Martti Tienari',
    number: '040-123456',
    id: 2
  },
  {
    name: 'Arto Järvinen',
    number: '040-123456',
    id: 3
  },
  {
    name: 'Lea Kutvonen',
    number: '040-123456',
    id: 4
  },
  {
    name: 'Lou Reed',
    number: '555-1231234',
    id: 5
  }
];

const findPerson = id => {
  return persons.find(p => p.id === Number(id));
};

app.get('/info', (req, res) => {
  const info = `
  <p>Puhelinluettelossa on ${persons.length} henkilön tiedot</p>
  <p>${new Date()}</p>`;

  return res.send(info);
});

app.get('/api/persons', (req, res) => res.json(persons));

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  const person = findPerson(id);

  if (person) {
    return res.json(person);
  } else {
    return res
      .status(404)
      .json({ error: `person not found by given id ${id}` });
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  const person = findPerson(id);

  if (person) {
    persons = persons.filter(p => p.id !== person.id);
    return res.status(200);
  } else {
    return res
      .status(404)
      .json({ error: `person not found by given id ${id}` });
  }
});

app.post('/api/persons', (req, res) => {
  const body = req.body;

  const newPerson = {
    name: body.name,
    number: body.number,
    id: generateId()
  };

  persons = persons.concat(newPerson);

  return res.status(200).json(newPerson);
});

const generateId = () => Math.floor(Math.random() * Math.floor(99999));

const PORT = 3001;
app.listen(PORT);
