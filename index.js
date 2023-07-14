const express = require('express');

const app = express();

app.set('port', 3001);
app.use(express.json());

app.locals.ideas = [
  { id: 0, name: "Hello World", desc: "A simple idea" }, 
  { id: 1, name: "Hello World 2", desc: "Another simple idea" },
  { id: 2, name: "Hellow World 3", desc: "Yet another simple idea" }
]

app.get('/', (request, response) => {
  return response.status(200).json({ idea: 'box' });
});

//Get all ideas
app.get('/api/v1/ideas', (request, response) => {
  return response.status(200).json({ ideas: app.locals.ideas });
});

app.listen(app.get('port'), () => {
  console.log('FS Ideabox API running on http://localhost:3001')
});