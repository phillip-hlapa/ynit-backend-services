let app = require(__dirname +'/app');
let GLOBAL_ROUTER = require(__dirname + '/routes');

app.get('/api/test', (req, res) => {
    res.send("hello world!");
})

app.get('/', (req, res) => {
    res.send("<H2>Welcome to YNIT Master Backend Service! @ <i>" + new Date() + "</i></H2>")
})
app.use('/ynitapi', GLOBAL_ROUTER)

app.listen(process.env.PORT, (err, result) => {
    console.log('started server listening on port', process.env.PORT);
})