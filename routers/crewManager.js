const Model = require('../models/crewModel');
const router = require('express').Router();


router.post('/add', (req, res) => {
    data = req.body;

    new Model(data).save()
        .then(data => {
            console.log('STAFF data saved');
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getall', (req, res) => {

    Model.find({})
        .then(data => {
            console.log('staff data fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
        .then(data => {
            console.log('staff data fetched by id');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})
router.get('/getbyname/:name', (req, res) => {

    Model.findByName(req.params.name)
        .then(data => {
            console.log('staff data fetched by name');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.put('/update/:id', (req, res) => {

    let data = req.body;

    Model.findByIdAndUpdate(req.params.id, data)
        .then(data => {
            console.log('staff data updated');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
        .then(data => {
            console.log('staff data deleted');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;