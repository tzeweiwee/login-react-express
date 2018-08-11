import DBClient from './mock/dbHelper';

const collectionName = "users";

function userLogin (user) {
  const client = new DBClient(collectionName);
  client.connect();
  if(client.findOne(user)) {
    client.closeConnection();
    return;
  } else {
    throw new Error('Invalid email or password. User not found.')
  }
}

export default function (req, res) {
  try {
    userLogin(req.body);
    res.status(200).send({body: 'Login successful'});
  } catch (err) {
    res.statusMessage = err.message;
    res.status(500).send({body: 'Invalid email or password'});
  }
}