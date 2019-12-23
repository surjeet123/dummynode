const express = require('express');

const app = express();
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