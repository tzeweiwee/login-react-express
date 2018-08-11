import app from './app';
import POSTLOGIN from './lib/POSTLOGIN';

const port = 5001;

app.get('/api/sample', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/login', POSTLOGIN);

app.listen(port, () => console.log(`Listening on port ${port}`));