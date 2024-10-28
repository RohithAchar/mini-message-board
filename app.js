const express = require("express");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    id: 0,
    text: "Message one",
    user: "User one",
    added: new Date(),
  },
  {
    id: 1,
    text: "Message two",
    user: "User two",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("new");
});
app.post("/new", (req, res) => {
  const body = req.body;
  messages.push({
    id: messages.length,
    text: body.messageText,
    user: body.userName,
    added: new Date(),
  });
  res.redirect("/");
});

app.get("/messages/:id", (req, res) => {
  const msg = messages.find((message) => message.id == req.params.id);
  res.render("index", { messages: [msg] });
});

app.listen(3000, () => console.log("Running on localhost 3000"));
