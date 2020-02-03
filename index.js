const express = require('express');
const cookieParser = require('cookie-parser');
const homeRoute = require('./routes/home');
const formRoute = require('./routes/form');
const resultRoute = require('./routes/result');
const usersRoute = require('./api/users');
const timeRoute = require('./api/time');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cookieParser());

app.use('/', homeRoute);
app.use('/form', formRoute);
app.use('/result', resultRoute);
app.use('/api/users', usersRoute);
app.use('/api/time', timeRoute);


app.set('views', './views');
app.set('view engine', 'pug');

app.use(function(req, res, next) {
  let cookie = req.cookies.todayDate;
  if (cookie === undefined) {
    // no: set a new cookie
    let dateNow = new Date();

    res.cookie(
      'todayDate',
      dateNow
        .toString()
        .split(',')
        .join(','),
      { maxAge: 900000, httpOnly: true }
    );
    console.log('cookie created successfully');
  } else {
    console.log('cookie exists', cookie);
  }
  next();
});


app.get('/myroute/:param', (req, res) => {
  res.send(` <pre> req.params : ${JSON.stringify(req.params)} </pre>
             <pre>req.params.param : ${JSON.stringify(req.params.param)}</pre>  
             <pre>req.query : ${JSON.stringify(req.query)}</pre>  
             <pre>req.headers : ${JSON.stringify(req.headers)}</pre>
             <pre> req.cookies : ${JSON.stringify(req.cookies)} </pre>`);
});

app.listen(PORT, () => {
  console.log('Server is running...');
});
