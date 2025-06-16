// server.mjs
import express from 'express';
import fs from 'fs';

const app = express();

app.get('/', (req, res) => {
  res.redirect('/hello-world');
});

app.get('/hello-world', (req, res) => {
  res.redirect('/hello-world.json');
});

app.get('/hello-world.json', (req, res) => {
  res.type('application/json').send(JSON.stringify({
    status : 200,
    data : "ok"
  }))
});

const img = fs.readFileSync('./imege.jpeg');

app.get('/hello-world.jpeg', (req, res) => {
  res.type('jpeg').send(img);
});

app.use((req, res) => {
   res.send(`${req.method} is not supported on ${req.url}`);
})



// starts a simple express server locally on port 3000
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`
