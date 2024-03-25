const {Pool} = require('pg');

const pool = new Pool({
  connectionString :'postgres://yipxeosi:WWaqrY-JL7ENQUDx-AEtGEiyxiH3uC_b@rain.db.elephantsql.com/yipxeosi'
});

module.exports = {
  pool
};