const express = require('express');

const app = express();
//sjhjs

app.get("/user/mamahome", (req, esr) => {
    var test = [1, 2, 3, 4, 5, 6, 7]
    res.send({ address: test });
});

app.get("/order/mamahome", (req, res) => {
    var test = ["A","B","C"]
    res.send({ address: test });
});
app.get("/area/home",(req,res) => {
    var go_home = ["Q","W","E","R","T"]
    //res.send({address: go_home});
    res.send({arrayvalue :  go_home} );


})

app.listen(3000, () => {
    console.log('society exists');
})