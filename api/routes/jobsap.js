const router = require('express').Router();

let Job = require('../models/job.model');
router.route('/').get((req,res) => {
    Job.find()
        .then(jobsap => res.json(jobsap))
        .catch(err => res.status(400).json('Error:' +err));

});

router.route('/add').post((req,res)=> {
    const jobtype = req.body.jobtype;
    const description = req.body.description;
    const company = req.body.company;
    const apply = req.body.apply;

    const newJob = new Job({
         jobtype,
         description,
         company,
         apply
    });

    newJob.save()
        .then(() => res.json('job added!'))
        .catch(err => res.status(400).json('Error:' +err));

    });
    
    router.route('/:id').get((req,res) => {
        Job.findById(req.params.id)
            .then(job =>res.json(job))
            .catch(err => res.status(400).json('Error:' +err));
    });

    router.route('/:id').delete((req,res) => {
        Job.findByIdAndDelete(req.params.id)
            .then(() =>res.json('job deleted.'))
            .catch(err => res.status(400).json('Error: '+err));
    });

    router.route('/update/:id').post((req,res) => {
        Job.findById(req.params.id)
            .then(job => {
                job.jobtype = req.body.jobtype;
                job.description = req.body.description;
                job.company = req.body.company;
                job.apply = req.body.apply;

                job.save()
                    .then(() => res.json('job updated'))
                    .catch(err => res.status(400).json('Error:' +err));

            })
            .catch(err => res.status(400).json('Error:' +err));
           
    });

    

module.exports = router;
    


