const express = require('express');
const https = require("https");
const fs = require('fs');
const { default: test } = require('node:test');
const { stringify } = require("querystring");
const { type } = require("express/lib/response");
const app = express();
const port = 10045; 
const path = "/mnt/c/Users/raian/Desktop/CP/cp_codes";

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
  fs.writeFile(path +'/Coutput.txt', output,"utf-8", (e)=>{
    if(e) console.log(e);
  })
fs.writeFile(path +'/input.txt', input,"utf-8", (e)=>{
  if(e) console.log(e);
})
console.log('Test Case Parsed');
const readStream=fs.createReadStream(path+'/scratch.cpp','utf-8');
const writeStream=fs.createWriteStream(path+'/mycode2.cpp');
readStream.pipe(writeStream);
writeStream.on('finish', () => {
    console.log('mycode2.cpp ready for master!');
});

// Handle errors
readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

writeStream.on('error', (err) => {
    console.error('Error writing file:', err);
});
});


app.listen(port, (req, res) => {
  console.log(`server is listening on ${port}`);
});

