const config=require('./dbconfig');
const sql=require('mssql');

async function db() {
    try {
      await sql.connect(config)
      const result = await sql.query`SELECT * FROM [DBCOVISION].[dbo].[TBL_COV.IAM]`
      console.log(result)
    } catch (err) {
      console.log(err)
    }
}

db()

async function getId()
{
    try{
        
        let pool=await sql.connect(config);
        let ids= await pool.request().query('SELECT  * FROM [COVISION].[dbo].[TBL_COV.IAM]');
        return ids.recordsets;

    }catch(err){
        console.log(err);
    }
}

module.exports={
    getId:getId
}
