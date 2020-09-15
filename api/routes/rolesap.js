const router = require('express').Router();
let Roles = require('../models/roles.model');

router.route('/').get((req,res) => {
    Roles.find()
        .then(rolesap => res.json(rolesap))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) => {
    const jobtype = req.body.jobtype;
    const newRoles = new Roles({jobtype});

    newRoles.save()
        .then(() => res.json('Role added!'))
        .catch(err =>res.status(400).json('error:' +err));
});

module.exports = router;