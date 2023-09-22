const express = require('express');
const https = require("https");
const fs = require('fs');
const { default: test } = require('node:test');
const { stringify } = require("querystring");
const { type } = require("express/lib/response");
const app = express();
const port = 10045; 
const path = "/home/darthrider/Desktop/cp_codes";

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.post('/',(req,res)=>{
  let data= req.body;
  let test = data.tests;
  console.log(test);
  let input = "";
  let output="";
  input += String(test.length) +"\n";
  test.forEach((tests) => {
    input += tests.input;
    output+=tests.output;
  });
  fs.writeFile(path +'/output.txt', output,"utf-8", (e)=>{
    if(e) console.log(e);
  })
fs.writeFile(path +'/input.txt', input,"utf-8", (e)=>{
  if(e) console.log(e);
})
console.log('Test Case Parsed');
});


app.listen(port, (req, res) => {
  console.log(`server is listening on ${port}`);
});

