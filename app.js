const http = require('http');

const express = require('express');
const session = require('express-session');
// const redis = require('redis')
// let RedisStore = require('connect-redis')(session)
// let redisClient = redis.createClient()
const app = express();
global.shopItems = require('./shopItems')();
const cart = require('./cart');
const characters = require('./characters');


const cors = require('cors');
// add this code
const whitelist = ['https://warm-reaches-88811.herokuapp.com/, https://semplegit.github.io/angular-jurassic-park/']; // list of allow domain

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        if (whitelist.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//setting up the session
app.use(session({
  // store: new RedisStore({ client: redisClient }),
  secret: 'session secret',
  cookie: { maxAge: 1000 * 60 * 10 }, // Final number is how many minutes the session stays open, 10 is 10 minutes.
  saveUninitialized: true,
  resave: false
}));

http.createServer(app).listen(process.env.PORT);

app.get('/shopItems', (req, res) => {
  const sess = req.session;
  if (!sess.user) {
    sess.user = 'Random User';
  }
  res.json(shopItems);
});

app.get('/shopItems/:id', (req, res) => {
  res.json(shopItems.find(item => item.id === Number(req.params.id)) || {"itemName": "Item Not Found"});
});

app.get('/characters', (req, res) => {
  res.json(characters);
});

app.get('/characters/:id', (req, res) => {
  res.json(characters.find(item => item.id === Number(req.params.id)) || {"itemName": "Item Not Found"});
});

app.post('/addToCart', (req, res) => {
  const updateCart = cart(req.session.cart);
  req.session.cart = updateCart.addToCart(req.body);
  res.json(updateCart.getCartDetails());
  // res.end();
});

app.post('/removeOneFromCart', (req, res) => {
  const updateCart = cart(req.session.cart);
  updateCart.removeOneFromCart(req.body);
  res.json(updateCart.getCartDetails());
  // res.end();
});

app.post('/clearCart', (req, res) => {
  const updateCart = cart(req.session.cart);
  updateCart.clearCart();
  res.json(updateCart.getCartDetails());
  // res.end();
});

app.post('/getCartItems', (req, res) => {
  const updateCart = cart(req.session.cart);
  req.session.save();
  res.json(updateCart.getCartDetails());
})

app.post('/processOrder', (req, res) => {
  const updateCart = cart(req.session.cart);
  res.json(updateCart.calculateTotal());
})

