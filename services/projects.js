const dbo = require ("../db/conn");

let projectCollection;

setTimeout(() => {
    projectCollection = dbo.getDB().collection("projects");
    
},5000);

const getAllProjects = (res) => {
    projectCollection.find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
});
}

const getProjectByID = (id,res) => {
        projectCollection.find({projectID: id}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
});
}

const getProjectByTitle = (ptitle,res) => {
    projectCollection.find({title: ptitle}).toArray((err, result) => {
    if (err) throw err;
    res.send(result);
});
}

const getProjectByDate = (date ,res) => {
        projectCollection.find({projectDate: date}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
});
}

const getProjectByInfo = (pInfo ,res) => {
    projectCollection.find({info: pInfo}).toArray((err, result) => {
    if (err) throw err;
    res.send(result);
});
}

const insertProject = (project ,res) => {
    projectCollection.insertOne(project, (err, result) => {
    if (err) throw err;
    res.send({result: 204});
});
}

const deleteProject = (id, res) => {
    projectCollection.deleteOne({projectID: id}, (err, result) => {
    if (err) throw err;
    res.send({result: 204});
});
}

module.exports = {
    getAllProjects,
    getProjectByID,
    getProjectByDate,
    insertProject,
    getProjectByTitle,
    getProjectByInfo,
    deleteProject

}