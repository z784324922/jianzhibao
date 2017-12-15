var mongodb = require("mongodb");

var MongoClient = mongodb.MongoClient;

var DB_CONN_STR = "mongodb://119.23.238.121:27017/jzb";


module.exports = {
    conn:function(callback){
        MongoClient.connect(DB_CONN_STR,(err,db)=>{
            if(err){
                console.log("数据库访问失败");
                callback(err,null);
            }
            else{
                console.log("数据库连接成功");
                callback(null,db);
            }
        })
    }
}