const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = express();

app.get('/endpoint-1', (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      message: 'Hello from endpoint 1',
    },
  });
});

app.get('/endpoint-2', (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      message: 'Hello from endpoint 2',
    },
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on this port ${PORT}`));




/* 
let numero = 4;
//var result =1;
//let result = 5;
let result=1;

for (let index = 1; index <= numero; index++) {
  result *=index;
  console.log( "el factorial de: " ,numero ,  "es: ", result);     
}

console.log( "el factorial de: " ,numero ,  "es: ", result); */