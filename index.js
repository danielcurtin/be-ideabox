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

// Get all ideas
app.get('/api/v1/ideas', (request, response) => {
  return response.status(200).json({ ideas: app.locals.ideas });
});

// Add an idea
app.post('/api/v1/ideas', (request, response) => {
  const newIdea = request.body;
  const requiredParams = ['name', 'desc'];
  let missingParams = [];

  for (let requiredProperty of requiredParams) {
    if (!newIdea[requiredProperty]) {
      missingParams = [...missingParams, requiredProperty];
    };
  };

  if (missingParams.length) {
    return response.status(422).send({ message: `Missing ${missingParams.join(', ')} in request.`});
  } else {
    if (!app.locals.ideas.length) {
      newIdea.id = 1;
    } else {
      newIdea.id = app.locals.ideas[app.locals.ideas.length - 1].id + 1;
    }
  }
  app.locals.ideas.push(newIdea);
  return response.status(201).json(newIdea);
});

// Remove an Idea
app.delete('/api/v1/ideas/:idea_id', (request, response) => {
  const ideaId = parseInt(request.params.idea_id);

  const numIdeasBeforeFilter = app.locals.ideas.length;
  const filteredIdeas = app.locals.ideas.filter(idea => ideaId !== idea.id);

  if (numIdeasBeforeFilter === filteredIdeas.length) {
    return response.status(404).json({ message: `No idea found with id: ${ideaId}` });
  } else {
    app.locals.ideas = filteredIdeas;
    return response.sendStatus(204);
  };
});

app.listen(app.get('port'), () => {
  console.log('FS Ideabox API running on http://localhost:3001')
});