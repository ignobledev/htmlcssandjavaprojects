const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');
// Route to display personalized greeting
app.get('/', (req, res) => {
  // Prepare the data to be passed to the view
  const name = 'Abhay'; // You can replace with req.query.name to make it dynamic
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[new Date().getDay()];
 
  // Pass the data to the 'greeting' view
  res.render('Demo', { name:name });
});
app.get('/layout1',(req,res)=>{
res.render('layout1',{layout:'layout'});
});
app.get('/layout2',(req,res)=>{
res.render('layout2',{layout:'layout'});
});
app.get('/layout3',(req,res)=>{
  res.render('layout3',{layout:'layout'});
});
app.get('/layout4',(req,res)=>{
  res.render('layout4',{layout:'layout'});
});
app.listen(5000, () => {
  console.log("Server running");
});