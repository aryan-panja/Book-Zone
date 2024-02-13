const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const cart = [];

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main');

app.set('view engine', 'ejs');
/*app.set('layout', './layouts/admin');
app.set('view engine', 'ejs');
*/
const routes = require('./server/routes/recipeRoutes.js')

app.use('/', routes);
app.use('/', require('./server/routes/admin.js'));
// cart route
//app.use('/api',routes);
const cart_routes = require("./server/routes/cartRoute.js")
app.use('/api', cart_routes);
app.listen(port, ()=> console.log(`Listening to port ${port}`));