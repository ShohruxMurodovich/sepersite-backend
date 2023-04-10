const { Pool } = require('pg')

const pool = new Pool({
    connectionString: 'postgres://scmpdcia:Q2Cg_Mh2PmSaOo9oN1g3TAH5E5sVajKN@lallah.db.elephantsql.com/scmpdcia'
})

const fetchData = async(SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params.length ? params : null)
        return rows
    } finally {
        client.release()
    }
}

const fetchRow = async(SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows: [ row ] } = await client.query(SQL, params.length ? params : null)
        return row
    } finally {
        client.release()
    }
}

module.exports = {
    fetchData,
    fetchRow
}