const request = require('request');
const express = require('express');
const cors = require('cors');
const env = require('dotenv');
env.config();
const app = express();

app.use(cors());

let options = {
  'method':'GET',
  'url':`https://${process.env.API_KEY}:${process.env.API_PASS}@shopingmart003.myshopify.com/admin/api/2023-01/customers.json`,
  'headers':{
    'Content-type': 'application/json' 
  }
}

app.get('/getcustomers', (req, res)=>{
  request(options, function(err, resp){
    if(err){
      throw new Error(err);
    }
    else{
      let response = resp.body;
      res.send(response);
    }
  });
});

app.get('/getcustomerdetails/:id', (req, res)=>{
  request({
    'method':'GET',
    'url':`https://${process.env.API_KEY}:${process.env.API_PASS}@shopingmart003.myshopify.com/admin/api/2023-01/customers/${req.params.id}.json`,
    'headers':{
      'Content-type': 'application/json' 
    }
  }, function(err, resp){
    if(err){
      throw new Error(err);
    }
    else{
      let response = resp.body;
      res.send(response);
    }
  });
});

app.get('/getorderdetails', (req, res)=>{
  request({
    'method':'GET',
    'url':`https://${process.env.API_KEY}:${process.env.API_PASS}@shopingmart003.myshopify.com/admin/api/2023-01/orders.json?status=any`,
    'headers':{
      'Content-type': 'application/json' 
    }
  }, function(err, resp){
    if(err){
      throw new Error(err);
    }
    else{
      let response = resp.body;
      res.send(response);
    }
  });
});

app.listen(process.env.PORT, ()=>{
  console.log("Backend listening on http://localhost:5000");
});