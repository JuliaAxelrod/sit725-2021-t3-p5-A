const express = require ("express");
// const res = require("express/lib/response");
const router = express.Router();

router.get('/',(req,res) => {
    res.send("Hello from Guides get all resources API");
});

router.get('/:id',(req,res) => {
    res.send("Hello from Guides " + req.params.id +" get all resources API");
});

// create data
router.post('/',(req,res) => {
    // req body
    res.sendStatus( 204);
});

// update data
router.put('/:id',(req,res) => {
    // req body
    res.send( "Hello from Guides  UPDATEs" + req.params.id +" get all resources API");
});

router.delete('/:id',(req,res) => {
    // req body
    res.send( "Hello from Guides  DELETEs " + req.params.id +" get all resources API");
});

module.exports = router;
