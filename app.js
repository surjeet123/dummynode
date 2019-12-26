const express = require('express');
const mongodb = require('./mongoconnect');
const app = express();

const empModel = require('./model/employee');
//sjhjs

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept,Authorization,Cache-Control',
    );
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});
//MONGO_URL=mongodb+srv://khush:khush@cluster0-0pbld.mongodb.net/test?retryWrites=true&w=majority
app.get("/getemployee", (req, res) => {
    empModel.find(function (err, result) {
        res.send(result);
    });
    
});



app.listen(3000, () => {
    console.log('society exists');
})   