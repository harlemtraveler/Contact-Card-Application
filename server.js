const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = 3000;
const app = express();

const contactsRouter = require('./routes/contactsRouter');

app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.get('/', (req,res) => {
  res.render('home/index');
});

app.use('/contacts', contactsRouter);

app.listen(PORT, () => {
  console.log(`[*] listening on port ${PORT}`);
});
