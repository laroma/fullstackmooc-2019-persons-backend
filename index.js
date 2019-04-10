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

app.get('/info', (req, res) => {
  const info = `
  <p>Puhelinluettelossa on ${persons.length} henkilön tiedot</p>
  <p>${new Date()}</p>`;

  return res.send(info);
});

app.get('/api/persons', (req, res) => res.json(persons));

const PORT = 3001;
app.listen(PORT);
