const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors')
const { logger } = require("./middleware/logEvents");
const errorHandler = require('./middleware/errorHandler');

const whitelist = ["https://localhost:3000"]; //"https://www.google.com" to verify CORS
corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) != -1 || !origin) { // OR operator added 
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); //third party middleware

app.set('view engine', 'ejs'); //template engine
app.set('views', path.join(__dirname, '..','views'));

app.use(logger); //custom middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//routes
const cartRoutes = require('./routes/cart.js');
app.use('/', cartRoutes);

app.use(errorHandler)//middleware

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
