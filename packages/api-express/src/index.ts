import express from "express";
import path from 'path';
import bodyParser from 'body-parser';
const app = express();
const port = 8080;

// place holder for the data
const users = [] as {name: string}[];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user added");
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
