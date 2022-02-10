const testButtonFunction=()=>{
  alert('Thank you for clicking')
}

// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

function projectCard(project) {
  return `    <div class="col s6 m4 l3">
  <div class="card">
    <div class="card-image">
      <img src="${project.img ? project.img : 'assets/Iceberg_7292.jpg'}">
      <span class="card-title">${project.title} ${project.projectDate}</span>
    </div>
    <div class="card-content">
      <p>${project.info}</p>
    </div>
    <div class="card-action">
      <a href="project.html?pid=${project.projectID}">This is a link</a>
    </div>
  </div>
</div>`
}

function createProject(){ 
  // debugger;
  const project = {
    "projectID": $('#project-id').val(), // 212,
    "projectDate": $('#project-date').val(), // "2017-03-12T13:37:27+00:00",
    "title": $('#project-title').val(), // "project 212",
    "info": $('#project-info').val(), // "Cierva Cove, Antarctica ",
    "img": $('#project-image').val() // null
  };

  var settings = {
    "url": "/project",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify(project),
  };
  console.log('Cheers!!!');
  console.log(settings);
  $.ajax(settings).done(function (response) {
debugger;
    console.log('Cheers!!');
      $('#projects-list').append(projectCard(project));

      $('#project-id').val(''); 
      $('#project-date').val(''); 
      $('#project-title').val(''); 
      $('#project-info').val(''); 
      $('#project-image').val(''); 
      $('.modal').modal('close');
   

      console.log(response);

  });
  // console.log('Cheers!!!!');

};

console.log('test')
$(document).ready(function(){
  console.log('Ready')
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('#insert-project').click(() => {
    createProject();
  });

  //bind the button
  // $('#testButton').click(testButtonFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"',(result)=>{
    console.log(result)
  });

  // $.get('/projects', (result) => {
  //   $('#projects-list').text(JSON.stringify(result))
  //   console.log(result)
  // })

  $.get('/projects', (result) => {
    for (let p of result) {
    $('#projects-list').append(projectCard(p))
    }
    console.log(result)
  })
})
