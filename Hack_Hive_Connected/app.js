const express = require('express');
const app = express();
const path = require('path')
// const userModel = require('./model/user');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.post("/logIn", async (req, res) => {
  res.render("profile.ejs");
}); 

app.get('/logout', (req, res) => {
  res.redirect('/');
});

app.get('/profile', (req, res) => {
  res.render('profile.ejs');
});

app.get('/Dashboard', (req, res) => {
  // res.render('dashboard'); /
  res.render('dashboard')
});

app.get('/notifications', (req, res) => {
  res.render('notification'); // Renders views/notification.ejs
});

app.get('/contact', (req, res) => {
  res.render('contact'); // Renders views/contact.ejs
});

// Assuming you have Express set up
app.get('/studentprofile', (req, res) => {
  res.render('studentprofile'); // This will render your studentprofile.ejs file
}); // Renders views/contacts.ejs

// Routes for each menu item
app.get('/attendance', (req, res) => {
  res.render('attendance'); // attendance.ejs
});

app.get('/students', (req, res) => {
  res.render('students'); // students.ejs
});

app.get('/leaves', (req, res) => {
  res.render('leaves'); // leaves.ejs
});

app.get('/feepayment', (req, res) => {
  res.render('feepayment'); // fees.ejs
});

app.get('/timetable', (req, res) => {
  res.render('timetable'); // timetable.ejs
});

app.get('/academic', (req, res) => {
  res.render('performance'); // academic.ejs
});








app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


