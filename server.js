const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = 3000;

const contactsRouter = require('./routes/contactsRouter');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req,res) => {
  res.render('show');
});

app.use('/contacts', contactsRouter);

app.listen(PORT, () => {
  console.log(`[*] listening on port ${PORT}`);
});
