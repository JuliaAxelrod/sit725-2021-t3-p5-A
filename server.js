let express = require("express");
let app = express();

//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);





var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

console.log (process.env.name);
app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});


//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});

const projects = [];

for (let id = 1; id < 21; id++){

  let projectDate = new Date(id*100000000000);
  projects.push({
    projectID: id,
    projectDate: projectDate,
    title: 'project ' + id,
    info: `This is the info the project number ${id} logged on the ...${projectDate.getFullYear()}   ${projectDate.getDay()}  ${projectDate.getMonth()}`,
    img: "assets/" + id.toString() + ".jpg", 
  
  });
  console.log ("project Date ",  typeof(projectDate), projectDate.getFullYear(), ); 
}

app.get("/projects", function (request, response){
  response.json(projects);
  // need to get the syntax right here:
  // projects.filter(p=>p.projectDate <= Date.now() &&  p.projectDate > Date(1918));
})

http.listen(port,()=>{
  console.log("Listening on port ", port);
});

//this is only needed for Cloud foundry 
require("cf-deployment-tracker-client").track();
