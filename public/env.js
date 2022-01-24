const testButtonFunction=()=>{
  alert('Thank you for clicking')
}

// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

function projectCard(project) {
  return `    <div class="col s6 m4">
  <div class="card">
    <div class="card-image">
      <img src="${project.img ? project.img : 'assets/ale.jpg'}">
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


console.log('test')
$(document).ready(function(){
  console.log('Ready')
  $('.sidenav').sidenav();

  //bind the button
  // $('#testButton').click(testButtonFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"',(result)=>{
    console.log(result)
  })

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
