const config = {
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASENAME,
    server: process.env.SERVERNAME,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true,
      trustServerCertificate: true, 
      cryptoCredentialsDetails: {
        minVersion: 'TLSv1'
      }
    }
}
module.exports=config