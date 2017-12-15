var express  =  require("express");
var cookieParser = require('cookie-parser'); 
var bodyParser = require('body-parser');
var async = require("async");   
var app = express(); 

var server  = require("http").createServer(app);
//var host = "localhost";
var host = "172.18.123.162";

var port = 7700;
var getDb = require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next();
});



app.post("/user/register",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var user = db.collection("user");
            var data = {username:req.body.username,password:req.body.password};
			var username = req.body.username;
			var password = req.body.password;
			
			async.waterfall([
            function(callback){
                user.find({username:username}).toArray((err,result)=>{
                    if(err) throw err;
                    console.log(result);
                    if(result.length>0){
                        console.log("不可注册")
                        callback(null,true);   // true 表示有账号
                    }else{
                        callback(null,false);
                    }
                })
            },
            function(arg,callback){
                if(arg){
					callback(null,"0")
                	console.log("有账号,不可以注册");
                }else{
					user.insert(data,(err,result)=>{
						if(err) throw err;
						console.log(result);
						callback(null,"1");
					})
                }
            }
            ],function(err,result){
                if(err) throw err;
                console.log(result);
                if(result=="1"){
                    res.send("插入成功!");
                }else{
                    res.send("插入失败!");
                }
            })
     
        }
    })
})

app.post("/user/login",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("登录失败!");
        }else{
            var user = db.collection("user");
            var data = {username:req.body.username,password:req.body.password};
            user.find(data).toArray((err,result)=>{
                if(err) throw err;
                console.log(result);
                if(result.length>0){
                    res.send("登录成功!");
                }else{
                    res.send("登录失败!");
                }
                
                db.close();
            })
        }
    })
})


app.post("/user/updatepsw",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("修改密码失败");
        }else{
            var username = req.body.username;
            console.log(username);
            var password = req.body.password;
            console.log(password);
            var conn = db.collection("user");
            async.waterfall([
            function(callback){
                conn.find({username:username}).toArray((err,result)=>{
                    if(err) throw err;
                    console.log(result);
                    if(result.length>0){
                        console.log("可以修改")
                        callback(null,true);   // true 表示有账号
                    }else{
                        callback(null,false);
                    }
                })
            },
            function(arg,callback){
                if(arg){
                console.log("有账号,可以修改");
                conn.updateOne(
                    {username:username},
                    {$set:{
                        password:password
                    }},
                    (err,result)=>{
                        if(err) throw err;
                        callback(null,"1");
                    }
                )
                }else{
                callback(null,"0")
                }
            }
            ],function(err,result){
                if(err) throw err;
                console.log(result);
                if(result=="1"){
                    res.send("修改成功");
                }else{
                    res.send("修改失败2");
                }
            })
        }
    })
})

app.get("/jingxuan",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var jingxuan = db.collection("jingxuan");
            jingxuan.find().toArray((err,result)=>{
                if(err) throw err;
                res.send(result);
            })
        }
    })
})

app.get("/detail",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
			var a = req.query.jobId;
			var b = Number(a);
            var detail = db.collection("detail");
            detail.find({id:b}).toArray((err,result)=>{
                if(err) throw err;
                res.send(result);
            })
        }
    })
})

app.get("/bailing",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var bailing = db.collection("bailing");
            bailing.find().toArray((err,result)=>{
                if(err) throw err;
                res.send(result);
            })
        }
    })
})

app.get("/fujin",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var fujin = db.collection("fujin");
            fujin.find().toArray((err,result)=>{
                if(err) throw err;
                res.send(result);
            })
        }
    })
})

app.get("/huwai",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var huwai = db.collection("huwai");
            huwai.find().toArray((err,result)=>{
                if(err) throw err;
                res.send(result);
            })
        }
    })
})

app.get("/shinei",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var shinei = db.collection("shinei");
            shinei.find().toArray((err,result)=>{
                if(err) throw err;
                res.send(result);
            })
        }
    })
})

app.get("/ticheng",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var ticheng = db.collection("ticheng");
            ticheng.find().toArray((err,result)=>{
                if(err) throw err;
                res.send(result);
            })
        }
    })
})

app.get("/wanshang",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var wanshang = db.collection("wanshang");
            wanshang.find().toArray((err,result)=>{
                if(err) throw err;
                res.send(result);
            })
        }
    })
})

app.post("/sign",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var sign = db.collection("sign");
			var data = {username:req.body.username,jobsid:req.body.jobsid,applicationStatus:1};
			var jobsid = req.body.jobsid;
			var username = req.body.username;
			async.waterfall([
            function(callback){
                sign.find({username:username,jobsid:jobsid}).toArray((err,result)=>{
                    if(err) throw err;
                    console.log(result);
                    if(result.length>0){
                        console.log("已报名")
                        callback(null,true);   // true 表示报名过
                    }else{
                        callback(null,false);
                    }
                })
            },
            function(arg,callback){
                if(arg){
					callback(null,"0")
                	console.log("已经报名,不可以重复报名");
                }else{
					sign.insert(data,(err,result)=>{
						if(err) throw err;
						console.log(result);
						callback(null,"1");
					})
                }
            }
            ],function(err,result){
                if(err) throw err;
                console.log(result);
                if(result=="1"){
                    res.send("报名成功!");
                }else{
                    res.send("报名失败!");
                }
            })
     
        }
    })
})

app.get("/findSign",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
			var a = req.query.username;
			var jobs =[];
			console.log(a);
            var sign = db.collection("sign");
			var alljobs = db.collection("alljobs");
			async.waterfall([
            function(callback){
                sign.find({username:a}).toArray((err,result)=>{
                    if(err) throw err;
                    console.log(result);
					result.forEach((val,index,arr)=>{
           				jobs[index]=arr[index].jobsid
					})
					console.log(jobs);
                    if(result.length>0){
                        console.log("有报名信息")
                        callback(null,true);   // true 表示报名过
                    }else{
                        callback(null,false);
                    }
                })
            },
            function(arg,callback){
                if(!arg){
					callback(null,"0",null)
                	console.log("没有报名信息");
                }else{
					alljobs.find({jobId:{$in:jobs}}).toArray((err,result)=>{
						if(err) throw err;
						
						callback(null,"1",result);
					})
                }
            }
            ],function(err,result,data){
                if(err) throw err;
                if(result=="1"){
                    res.send(data);
                }else{
					res.send("没有报名");
                }
            })
			
        }
    })
})

app.post("/delete",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err){
            res.send("删除失败!");
        }else{
            var sign = db.collection("sign");
            var data = {username:req.body.username,jobsid:req.body.jobId};
			sign.deleteOne(data,(err,result)=>{
				if(err) throw err;
                console.log(result);
                res.send("删除成功!")
                db.close();
			}) 
        }
    })
})




app.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`);
})