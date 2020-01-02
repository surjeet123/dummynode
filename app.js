const express = require('express');
const mongodb = require('./mongoconnect');
const bodyParser = require('body-parser');
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
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

//MONGO_URL=mongodb+srv://khush:khush@cluster0-0pbld.mongodb.net/test?retryWrites=true&w=majority
app.get("/getemployee", (req, res) => {
    empModel.find(function (err, result) {
        res.send(result);
    });
});
app.post('/saveemployee', (req, res) => {
    const inputModel = req.body;
    empModel.create(inputModel).then((result, err) => {
        res.send(result);
    })
});
app.post('/updatedemployee', (req, res) => {
    const inputModel = req.body;
empModel.findByIdAndUpdate(inputModel._id,inputModel,(result, error) =>{
   res.send(result);
});
});
app.delete('/deleteemployee', (req, res) => {
 const inputModel = req.body;
empModel.findByIdAndRemove(inputModel._id,(err,res)=>{
    res.send(res);
})

})

app.listen(3000, () => {
    console.log('society exists');
})   