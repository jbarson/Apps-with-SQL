const pg = require('pg')

require('dotenv').config()

const Client = pg.Client

const configObject = {
  user: 'postgres',
  database: 'library',
  password: 'postgres'
}
