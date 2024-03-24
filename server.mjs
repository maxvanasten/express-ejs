import Express from 'express';
const app = Express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/test', (req, res) => {
  res.render('partials/notes', {
    notes: [
      { title: "test note", note: "Some note." },
      { title: "another test note", note: "Hello, world!" },
      { title: "random test note", note: "Blablabla." },
      { title: "test note 4", note: "Some random note." }
    ]
  })
})

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
})
