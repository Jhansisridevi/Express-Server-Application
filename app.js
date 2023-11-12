const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const port = 3000;

//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..','views'));

app.use(logger)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//routes
const cartRoutes = require('./routes/cart.js');
app.use('/', cartRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
