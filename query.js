const pg = require('pg')

require('dotenv').config()

const Client = pg.Client

const configObject = {
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD
}


const client = new Client(configObject)

client.connect()
  .then(() => console.log('db connected'))
  .catch(err => console.error('You goofed!', err))
//   .finally(() => client.end())

//CRUD BREAD

const browse = (callback) => {
  client.query('SELECT * FROM books ORDER BY id;')
    .then(response => {
      callback(response.rows)
    })
    .catch(err => console.error(err))
}

module.exports = { browse }