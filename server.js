const express = require('express');
const env = require('dotenv').config();
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const destPhone = process.env.TIM_PHONE;
const srcPhone = process.env.TWILIO_PHONE;
// const MessagingResponse = require('twilio').twilml.MessagingResponse;
const client = new twilio(accountSid, authToken);
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

function sendTextMessage() {
  client.messages.create({
      body: 'Hello from Node',
      to: 'destPhone',  // Text this number
      from: 'srcPhone' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
};

app.get('/', (req,res) => {
  res.render('home/index');
});

app.use('/contacts', contactsRouter);

app.get('/message', (req, res) => {
  sendTextMessage();
});

app.listen(PORT, () => {
  console.log(`[*] listening on port ${PORT}`);
});
