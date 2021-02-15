const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burger: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne(req.body.name, (result) => {
        res.redirect('/');
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id=${req.params.id}`

    burger.updateOne(
    condition,
    (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    });
});

module.exports = router;