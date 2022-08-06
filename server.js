const express = require('express');
const path = require('path');
let app = express();
let msg;
let verify = require('./module/verify.js');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
function listen(port, clnt) {
  app.listen(port, () => {
    console.log('Server is running on port : '+port);
  });
}
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'));
});
function ran(message) {
  app.get(`/${message.author.id}`, (req, res) => {
    msg = message;
    console.log(message.author.username);
    res.sendFile(path.join(__dirname, 'views/index.html'));
  });
  app.post('/captcha', (req, res) => {
    if (req.body.o == req.body.c) {
      console.log(msg.author.username);
      verify(msg);
      res.sendFile(path.join(__dirname, 'views/final.html'));
    } else {
      res.sendFile(path.join(__dirname, 'views/error.html'));
    }
  });
}
module.exports = {
  listen,
  ran
};
