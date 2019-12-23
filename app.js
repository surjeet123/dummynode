const express = require('express');

const app = express();
//sjhjs

app.get("/user/mamahome", (req, res) => {
    var test = [1, 2, 3, 4, 5, 6, 7]
    res.send({ address: test });
});

app.get("/order/mamahome", (req, res) => {
    var test = ["A","B","C"]
    res.send({ address: test });
});

app.listen(3000, () => {
    console.log('society exists');
})