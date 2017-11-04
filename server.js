let 
http = require( 'http' ),
express = require('express'),
bodyParser = require("body-parser"),
jsonParse = bodyParser.json(),
fs =require('fs'),
app = express(),
count = 0,
ppls_list = [],
server = http.createServer(app);

app.use( express.static( __dirname + '/build' ));

app.get( '/', function ( request, response ) { 
    response.redirect( '/' );
}); 
app.get('/get-data',(req,res)=>{
file = 'back/data.json';
fs.readFile(file,'utf-8',(err,data)=>{
    if(err){}
    else{
        res.end(data)
    }
})
})
app.post('/add',jsonParse,(req,res)=>{
let file='back/data.json'
fs.readFile(file,'utf-8',(error,data)=>{
    if(error)console.log('error:',error)
    else{
        let obj = JSON.parse(data)
        let count = obj.products.length
        obj.products.push({
            id:String(+(obj.products[count-1].id)+1),
            name:req.body.name,
            author:req.body.author,
            year:req.body.year,
            except:req.body.except,
            image_url:req.body.image_url,
            content:req.body.content,
        })
        fs.writeFile(file,JSON.stringify(obj))
        res.json(JSON.stringify(obj))
    }
})
})
app.post('/delete',jsonParse,(req,res)=>{
let file='back/data.json'
fs.readFile(file,'utf-8',(error,data)=>{
    if(error)console.log('error:',error)
    else{
        let obj = JSON.parse(data)
        obj.products=obj.products.filter(item=>{
            return item.id!=req.body.id
        })
        fs.writeFile(file,JSON.stringify(obj))
        res.json(JSON.stringify(obj))
    }
})
})
app.post('/change',jsonParse,(req,res)=>{
let file='back/data.json'
fs.readFile(file,'utf-8',(error,data)=>{
    if(error)console.log('error:',error)
    else{
        let obj = JSON.parse(data)
        obj.products=obj.products.map(item=>{
            if(item.id==req.body.item.id)return req.body.item
            return item
        })
        fs.writeFile(file,JSON.stringify(obj))
        res.json(JSON.stringify(obj))
    }
})
})
let port = process.env.PORT || 5000;
server.listen(port);
console.log(
'Express-сервер прослушивает порт %d в режиме %s',
server.address().port, app.settings.env);

// function getClientIp(req) {
//     var ipAddress;
//     // The request may be forwarded from local web server.
//     var forwardedIpsStr = req.header('x-forwarded-for'); 
//     if (forwardedIpsStr) {
//       // 'x-forwarded-for' header may return multiple IP addresses in
//       // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
//       // the first one
//       var forwardedIps = forwardedIpsStr.split(',');
//       ipAddress = forwardedIps[0];
//     }
//     if (!ipAddress) {
//       // If request was not forwarded
//       ipAddress = req.connection.remoteAddress;
//     }
//     return ipAddress;
// };