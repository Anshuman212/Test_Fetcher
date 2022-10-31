const express = require('express');
const https = require("https");
const fs = require('fs');
const { default: test } = require('node:test');
const { stringify } = require("querystring");
const { type } = require("express/lib/response");
const app = express();
const port = 10045; //given in companion
const path = "C:/Users/raian/Desktop/My_Shit/cp_codes";

app.use(express.urlencoded({extended:true}));
app.use(express.json()); //parses json and puts it in req.body
app.post('/',(req,res)=>{
  // storing data from the req.body
  let data= req.body;
  // console.log(data);
  let test = data.tests;
  // console.log(test);
  let input = "";
  input += String(test.length) +"\n"; // taking the input of total number of test cases
  // console.log(input);
  test.forEach((tests) => {
    // adding all the inputs to the input name string
    input += tests.input;
  });

// now writing the inputs to the file
fs.writeFile(path +'/input.txt', input,"utf-8", (e)=>{
  if(e) console.log(e);
})

console.log('Parsing Success');
});


app.listen(port, (req, res) => {
  console.log(`server is listening on ${port}`);
});

