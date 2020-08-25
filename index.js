//Create App and adding Express, HTTP and Socket
var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

//Port Intialization
const port = process.env.PORT || 4040;

//connection occurs when users open the client link (Home page)
io.on("connection", (socket) => {
  console.log("Connected User ID : ", socket.id);
  //Gets data from one Client and Emits(Sends) to all client for Button When Clicked
  socket.on("connect1", (data) => {
    io.sockets.emit("connect1", data);
    console.log(data);
  });

  //Gets data from another Client and Emits(Sends) to all client for Button When Clicked
  socket.on("connect2", (data) => {
    io.sockets.emit("connect2", data);
  });
});

//opening Port on 8000 or Heroku's Port
http.listen(port, () => {
  console.log("listening on : ", port);
});
