const pgp = require('pg-promise')();
require('dotenv').config() 

const username = process.env.PG_USER
const password = process.env.PG_PASSWORD
const host = process.env.PG_HOST
const port = process.env.PG_PORT
const database = process.env.DATABASE
const connection = `postgres://${username}:${password}@${host}:${port}/${database}`
//const connection = `postgres://postgres:juancho@localhost:5432/mrcoffee`
const db = pgp(connection)
module.exports = db