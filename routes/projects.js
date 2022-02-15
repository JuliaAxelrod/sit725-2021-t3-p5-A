const express = require ("express");
// const res = require("express/lib/response");
const router = express.Router();

const projectService = require ("../services/projects");
     

router.get('/',(req,res) => {
    projectService.getAllProjects(res);
});

router.get('/:id',(req,res) => {
    projectService.getProjectByID(req.params.id, res);
});

// localhost:8080/api/projects/projectTitle/Test 1
router.get('/projectTitle/:title',(req,res) => {
    console.log ("title ", req.params.title);
    projectService.getProjectByTitle(req.params.title, res);
});

// localhost:8080/api/projects/projectDate/2022-02-11 
router.get('/projectDate/:projectDate',(req,res) => {
    console.log ("date???", req.params.projectDate);
    projectService.getProjectByDate(req.params.projectDate, res);
});

// localhost:8080/api/projects/projectInfo/Cierva cove 2
router.get('/projectInfo/:info',(req,res) => {
    console.log ("info???", req.params.info);
    projectService.getProjectByInfo(req.params.info, res);
});

// create data
router.post('/',(req,res) => {
    // req body
    projectService.insertProject(req.body, res);
});

// update data
router.put('/:id',(req,res) => {
    // req body
    res.send( "Hello from Project  UPDATEs" + req.params.id +" get all resources API");
});

router.delete('/:id',(req,res) => {
    console.log ("Delete???", req.params.id);
    projectService.deleteProject(req.params.id, res);
});

module.exports = router;



 