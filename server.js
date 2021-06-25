const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const cors = require('cors');
const io = require("socket.io")(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  app.use(cors());

const port = process.env.PORT || 3001;
app.get('/',function(req, res){
    res.send("Run successfull");
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

httpServer.listen(port, function(){
    console.log(`Server running at port ${port}`);
});