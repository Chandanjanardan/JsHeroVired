const express = require('express');
const fs = require('fs');

const app = express();

app.get('/product', (req, res) => {
  fs.readFile('product.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const products = JSON.parse(data);
    const productNames = products.map(product => product.name).join(', ');
    res.send(`Product names: ${productNames}`);
  });
});



app.listen(3000, () => console.log('Server started on port 3000'));
