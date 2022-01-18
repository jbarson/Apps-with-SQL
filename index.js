const pg = require('pg')

require('dotenv').config()

const Client = pg.Client

const configObject = {
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD
}

// console.log(configObject)

const client = new Client(configObject)

client.connect()
  .then(() => console.log('db connected'))
  .catch(err => console.error('You goofed!', err))
//   .finally(() => client.end())

//CRUD BREAD

const verb = process.argv[2]

const browse = () => {
  client.query('SELECT * FROM books ORDER BY id;')
    .then(response => {
      console.log(response.rows)
      client.end()
    })
}

const read = () => {
  const id = process.argv[3]
  // DON'T DO THIS!
  const query = `SELECT * FROM books WHERE id = ${id}`
  console.log(query)
  client.query('SELECT * FROM books WHERE id = $1;', [id])
    .then(response => {

      console.log(response.rows)
      client.end()
    })
}
switch (verb) {
  case 'browse':
    browse()
    break;
  case 'read':
    read()
    break;
  default:
    console.log('bad verb')
    client.end()
}

// browse()
