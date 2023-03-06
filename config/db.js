const knex = require('knex');  // module that connect to a database
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
        client: 'pg',
        connection: {
          host : process.env.DB_HOST,
          port : process.env.DB_PORT,   
          user : process.env.DB_USER,
          password : process.env.DB_PASS,
          database : process.env.DB_NAME
        }
      });

      module.exports ={ 
        db
      }

