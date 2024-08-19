const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// Middleware to parse cookies
app.use(cookieParser('yourSecretKey'));

// Configuring express-session
app.use(session({
  secret: 'anotherSecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // for HTTP; set to true for HTTPS
}));

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('sample', 'This is a test cookie', { maxAge: 900000, httpOnly: true });
  res.send('Cookie has been set');
});

// Route to get cookies
app.get('/get-cookies', (req, res) => {
  const cookies = req.cookies;
  res.json(cookies);
});

// Route to set a session variable
app.get('/set-session', (req, res) => {
  req.session.user = { id: 1, username: "testUser" };
  res.send('Session variable has been set');
});

// Route to view session variable
app.get('/get-session', (req, res) => {
  const sessionUser = req.session.user;
  res.json(sessionUser);
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
