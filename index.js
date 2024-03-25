const express = require('express');
//const database = require('./services/database');
const app = express();

app.use(express.json());

app.use('/categories', require('./routes/categoryRoute'));
app.use('/products', require('./routes/productRoute'));




app.listen(3000, () =>  console.log("server started on port 3000"));