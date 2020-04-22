const express = require("express");
const router = express.Router();
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const authRouter = require("./route/auth");

//MIDDLWARE
app.use("/api", authRouter);

//router.get('/', (req,res) => {  res.send('respond with a resource'); })

// Send message for default URL
app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/index.html");
});
//app.get("/", (req, res) => res.send("Hello World with Express"));

io.on("connect", function (client) {
  //console.log("A user connected");

  client.on("join", function (data) {
    console.log(data);
  });

  client.on("messages-sent", function (input_msg) {
    console.log(input_msg);
    client.emit("messages-get", input_msg);
  });
});

http.listen(3000, () => {
  console.log("Server up and running...");
});
