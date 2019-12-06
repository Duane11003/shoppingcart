const { Pool } = require('pg');

const myURI = 'postgres://xvqxsgma:72cYOdqHJZw34XcqO_S33sIEa94qGL48@raja.db.elephantsql.com:5432/xvqxsgma'

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
    connectionString: URI
})

module.exports = pool;